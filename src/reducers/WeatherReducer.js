import types from '../actions/Types'

const initialState = {
  actualWeather: null
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_WEATHER_SUCCEEDED:
      return {
        ...state,
        actualWeather: action.payload
      }
    case types.RESPONSE_FROM_CACHE:
      return {
        ...state,
        actualWeather: action.payload
      }
    case types.REQUEST_FAILED:
      return {
        ...state,
        actualWeather: null
      }
    default:
      return state
  }
}