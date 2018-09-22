import { all, fork } from 'redux-saga/effects'
import locationSaga from '../sagas/LocationSaga'

export default function* root() {
  yield all([
    fork(locationSaga)
  ])
}
