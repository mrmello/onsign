import types from '../actions/Types'
// initial state when there is no message to show
const initialState = {
  message: null
}
/**
 * Tells the Notification component when and what to show,
 * as well as when to disapear from the screen
 */
export default function(state = initialState, action) {
  switch(action.type){
    case types.REQUEST_FAILED:
      return {
        message: action.payload.message
      }
    case types.DISMISS_NOTIFICATION:
    case types.FETCH_LOCATION_SUCCEEDED:
    case types.FETCH_WEATHER_SUCCEEDED:
      return {
        initialState
      }
    default:
      return state
  }
}