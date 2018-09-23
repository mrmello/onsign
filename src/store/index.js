import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'bootstrap/dist/css/bootstrap.min.css'
import sagas from './Sagas'
import reducers from './Reducers'
/**
 * Sets up the application Store, composed by redux and redux-saga
 */
const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware,
  )
)
sagaMiddleware.run(sagas)

export default Store
