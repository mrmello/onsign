import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../actions/Types'
import { fetchWeatherSucceeded } from '../actions'
import Services from '../services'

function* fetchWeatherFromAPI(action) {
  const data = yield call(Services.fetchWeatherFromAPI, action.payload)
  yield put(fetchWeatherSucceeded(data))
}

function* watcherWeatherSaga() {
  yield takeLatest(types.FETCH_WEATHER_REQUESTED, fetchWeatherFromAPI)
}

export default watcherWeatherSaga