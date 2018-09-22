import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import locationReducer from '../reducers/LocationReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  location: locationReducer
})

export default rootReducer
