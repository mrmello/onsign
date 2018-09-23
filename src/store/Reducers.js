import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import locationReducer from '../components/locationResults/LocationReducer'
import weatherReducer from '../components/weatherResults/WeatherReducer'
import notificationReducer from '../components/notification/NotificationReducer'
/**
 * Groups and returns the application reducers
 */
const rootReducer = combineReducers({
  form: reduxFormReducer,
  location: locationReducer,
  weather: weatherReducer,
  notification: notificationReducer
})

export default rootReducer
