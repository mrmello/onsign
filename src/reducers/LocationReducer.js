import types from '../actions/Types'

const initialState = {
  location: {}
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_LOCATION_SUCCEEDED:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state
  }
}