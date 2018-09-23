import { all, fork } from 'redux-saga/effects'
import locationSaga from '../components/locationResults/LocationSaga'
import weatherSaga from '../components/weatherResults/WeatherSaga'

/**
 * Runs the saga watchers to work as a middleware for the redux store
 */
export default function* root() {
  yield all([
    fork(locationSaga),
    fork(weatherSaga)
  ])
}
