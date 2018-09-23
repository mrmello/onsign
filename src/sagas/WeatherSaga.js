import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../actions/Types'
import { fetchWeatherSucceeded, requestFailed, dimissNotification, weatherCacheHit } from '../actions'
import Services from '../services'
import { waitToDimissNotification, createLocationThreeDecimalPrecision, createHashedValue } from '../utils'
import parseWeatherResult from '../services/WeatherParser'
import Store from '../store'

function* fetchWeather(action) {
  try {
    const { fetchedWeathers } = Store.getState().weather
    let keyContains
    const location = createLocationThreeDecimalPrecision(action.payload)
    Object.keys(fetchedWeathers).forEach(function(key){
      if(fetchedWeathers[key].hashedLocation === createHashedValue(location)){
        keyContains = key
      }
    })
    if(keyContains) {
      yield put(weatherCacheHit(fetchedWeathers[keyContains]))
    } else {
      const data = yield call(Services.fetchWeatherFromAPI, action.payload)
      const weatherResponse = yield call(parseWeatherResult, data, action.payload)
      yield put(fetchWeatherSucceeded(weatherResponse))
    }
  } catch (e) {
    console.error(e) //eslint-disable-line no-console
    yield put(requestFailed(new Error(`Awn! Request to wheater failed: ${e.message}`)))
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