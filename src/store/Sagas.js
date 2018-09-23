import { all, fork } from 'redux-saga/effects'
import locationSaga from '../sagas/LocationSaga'
import weatherSaga from '../sagas/WeatherSaga'

/**
 * Runs the saga watchers to work as a middleware for the redux store
 */
export default function* root() {
  yield all([
    fork(locationSaga),
    fork(weatherSaga)
  ])
}
