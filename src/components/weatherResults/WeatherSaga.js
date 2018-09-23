import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/Types'
import { fetchWeatherSucceeded, requestFailed, dimissNotification, weatherCacheHit } from '../../actions'
import Services from '../../services'
import { waitToDimissNotification, createLocationThreeDecimalPrecision, cacheHit, saveWeatherData, getDataFromLocalStorage } from '../../utils'
import parseWeatherResult from '../../services/WeatherParser'
import Store from '../../store'

/**
 * Takes in a payload and looks for it in the cache.
 * yields value from cache when it is appropriate or calls the service and
 * yields the data from API when cache misses.
 * Dispatches notification action when request fails
 */
function* fetchWeather(action) {
  try {
    let fetchedWeathers = getDataFromLocalStorage()
    let keyContains
    const location = createLocationThreeDecimalPrecision(action.payload)
    Object.keys(fetchedWeathers).forEach(function(key){
      if(cacheHit(fetchedWeathers[key], location)) {
        keyContains = key
      }
    })
    if(keyContains) {
      yield put(weatherCacheHit(fetchedWeathers[keyContains])) // yields value from localStorage
    } else {
      const data = yield call(Services.fetchWeatherFromAPI, action.payload)
      const weatherResponse = yield call(parseWeatherResult, data, action.payload)
      saveWeatherData(weatherResponse)
      yield put(fetchWeatherSucceeded(weatherResponse)) // yields value from API
    }
  } catch (e) {
    yield put(requestFailed(new Error("Ops! Request to OpenWeather failed :(")))
    yield waitToDimissNotification().then(async() =>{
        Store.dispatch(dimissNotification())
      }
    )
  }
}

/**
 * Watches for the specific action an acts as a middleware to run the request
 * to the OpenWeather API and then passes the data to the WeatherReducer
 */
function* watcherWeatherSaga() {
  yield takeLatest(types.FETCH_WEATHER_REQUESTED, fetchWeather)
}

export default watcherWeatherSaga