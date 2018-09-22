import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../actions/Types'
import { fetchLocationSucceeded, fetchWeather } from '../actions'
import Services from '../services'
//import Store from '../store'
import parseGeoResult from '../services/GeoParser'

function* fetchLocationFromAPI(action) {
  const data = yield call(Services.fetchLocationFromAPI, action.payload)
  const geoResponse = yield call(parseGeoResult, data)
  yield put(fetchLocationSucceeded(geoResponse.results[0]))
  yield put(fetchWeather(geoResponse.results[0].geometry.location))
}

// function fetchWeatherFromAPI() {
//   // let locations = {}
//   // yield put(geoResponse.results[0].geometry.location)
//   // Object.keys(geoResponse.results).forEach(function(result) {
//   //   console.log(geoResponse.results[result].geometry.location)
//   // })
// }

function* watcherLocationSaga() {
  yield takeLatest(types.FETCH_LOCATION_REQUESTED, fetchLocationFromAPI)
}

export default watcherLocationSaga