import { call, takeLatest } from 'redux-saga/effects'
import types from '../actions/Types'
import Services from '../services'

function* fetchLocationAPI(action) {
  yield call(Services.fetchLocationFromAPI, action.payload)
}

function* whatcherLocationSaga() {
  yield takeLatest(types.FETCH_LOCATION_REQUESTED, fetchLocationAPI)
}

export default whatcherLocationSaga