import types from '../actions/Types'

const initialState = {
  weathers: [],
  lastWeather: null
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_WEATHER_SUCCEEDED:
      return {
        ...state,
        weathers: [...state.weathers, action.payload],
        lastWeather: action.payload
      }
    default:
      return state
  }
}