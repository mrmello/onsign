import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../actions/Types'
import { fetchLocationSucceeded, fetchWeather, dimissNotification, requestFailed } from '../actions'
import Services from '../services'
import Store from '../store'
import parseGeoResult from '../services/GeoParser'
import { waitToDimissNotification } from '../utils'

function* fetchLocationFromAPI(action) {
  try {
    const data = yield call(Services.fetchLocationFromAPI, action.payload)
    const geoResponse = yield call(parseGeoResult, data)
    yield put(fetchLocationSucceeded(geoResponse))
    yield put(fetchWeather(data.data.results[0].geometry.location))
  } catch (e) {
    console.error(e) //eslint-disable-line no-console
    yield put(requestFailed(new Error("Ops! Request to Goecoding failed :(")))
    yield waitToDimissNotification().then(async() =>{
        Store.dispatch(dimissNotification())
      }
    )
  }
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