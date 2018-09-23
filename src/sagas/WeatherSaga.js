import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../actions/Types'
import { fetchWeatherSucceeded, requestFailed, dimissNotification, weatherCacheHit } from '../actions'
import Services from '../services'
import { waitToDimissNotification, createLocationThreeDecimalPrecision, cacheHit, saveWeatherData, getDataFromLocalStorage } from '../utils'
import parseWeatherResult from '../services/WeatherParser'
import Store from '../store'

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
      yield put(weatherCacheHit(fetchedWeathers[keyContains]))
    } else {
      const data = yield call(Services.fetchWeatherFromAPI, action.payload)
      const weatherResponse = yield call(parseWeatherResult, data, action.payload)
      saveWeatherData(weatherResponse)
      yield put(fetchWeatherSucceeded(weatherResponse))
    }
  } catch (e) {
    console.error(e) //eslint-disable-line no-console
    yield put(requestFailed(new Error("Ops! Request to OpenWeather failed :(")))
    yield waitToDimissNotification().then(async() =>{
        Store.dispatch(dimissNotification())
      }
    )
  }
}

function* watcherWeatherSaga() {
  yield takeLatest(types.FETCH_WEATHER_REQUESTED, fetchWeather)
}

export default watcherWeatherSaga