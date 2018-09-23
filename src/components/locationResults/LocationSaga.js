import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/Types'
import { fetchLocationSucceeded, fetchWeather, dimissNotification, requestFailed } from '../../actions'
import Services from '../../services'
import Store from '../../store'
import parseGeoResult from '../../services/GeoParser'
import { waitToDimissNotification, isReverseSearch } from '../../utils'

/**
 * Calls the service to fetch location data and if successful returns de data and
 * yields the weather api request. In case the request fails, yeilds the appropriated
 * action
 */
function* fetchLocationFromAPI(action) {
  try {
    let data
    if(isReverseSearch(action.payload)){
      const coordinates = action.payload.location.replace(/\s/g, "")
      data = yield call(Services.fetchReverseLocation, coordinates)
    } else {
      data = yield call(Services.fetchLocationFromAPI, action.payload)
    }
    const geoResponse = yield call(parseGeoResult, data)
    yield put(fetchLocationSucceeded(geoResponse))
    yield put(fetchWeather(geoResponse.coordinates))
  } catch (e) {
    yield put(requestFailed(new Error("Ops! Request to Goecoding failed :(")))
    yield waitToDimissNotification().then(async() =>{
        Store.dispatch(dimissNotification())
      }
    )
  }
}
/**
 * Watches for the specific action an acts as a middleware to run the request
 * to the Google Geocoding Location API and then passes the data to the
 * LocationReducer
 */
function* watcherLocationSaga() {
  yield takeLatest(types.FETCH_LOCATION_REQUESTED, fetchLocationFromAPI)
}

export default watcherLocationSaga