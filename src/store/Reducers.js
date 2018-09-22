import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import locationReducer from '../reducers/LocationReducer'
import weatherReducer from '../reducers/WeatherReducer'
import notificationReducer from '../reducers/NotificationReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  location: locationReducer,
  weather: weatherReducer,
  notification: notificationReducer
})

export default rootReducer
