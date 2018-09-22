import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'bootstrap/dist/css/bootstrap.min.css'

import sagas from './Sagas'
import reducers from './Reducers'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    sagaMiddleware,
  )
)
sagaMiddleware.run(sagas)

export default Store
