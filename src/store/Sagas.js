import { all, fork } from 'redux-saga/effects'
import locationSaga from '../sagas/LocationSaga'
import weatherSaga from '../sagas/WeatherSaga'

export default function* root() {
  yield all([
    fork(locationSaga),
    fork(weatherSaga)
  ])
}
