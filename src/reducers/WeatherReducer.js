import types from '../actions/Types'
// initial state when there is no data to show
const initialState = {
  actualWeather: null
}
/**
 * Keeps the weather information to be shown by the WeatherResult component
 */
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_LOCATION_REQUESTED:
    case types.REQUEST_FAILED:
      return {
        ...state,
        actualWeather: null
      }
    case types.FETCH_WEATHER_SUCCEEDED:
    case types.RESPONSE_FROM_CACHE:
      return {
        ...state,
        actualWeather: action.payload
      }
    default:
      return state
  }
}