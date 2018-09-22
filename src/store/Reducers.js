import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import locationReducer from '../reducers/LocationReducer'
import weatherReducer from '../reducers/WeatherReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  location: locationReducer,
  weather: weatherReducer
})

export default rootReducer
