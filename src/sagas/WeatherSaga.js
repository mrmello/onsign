import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../actions/Types'
import { fetchWeatherSucceeded, requestFailed, dimissNotification } from '../actions'
import Services from '../services'
import { waitToDimissNotification } from '../utils'
import parseWeatherResult from '../services/WeatherParser'
import Store from '../store'

function* fetchWeatherFromAPI(action) {
  try {
    console.log(Store.getState())
    const data = yield call(Services.fetchWeatherFromAPI, action.payload)
    const weatherResponse = yield call(parseWeatherResult, data)
    yield put(fetchWeatherSucceeded(weatherResponse))
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
  yield takeLatest(types.FETCH_WEATHER_REQUESTED, fetchWeatherFromAPI)
}

export default watcherWeatherSaga