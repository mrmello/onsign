import types from '../actions/Types'

const initialState = {
  weather: []
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_WEATHER_SUCCEEDED:
    console.log(action)
      return {
        ...state,
        weather: action.payload
      }
    default:
      return state
  }
}