import types from '../actions/Types'
// initial state for when there is no information to show
const initialState = {
  actualLocation: null
}
/**
 * Keeps the information about the retrieved location in the store,
 * this information will then be used by the LocationResult component
 */
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_LOCATION_REQUESTED:
    case types.REQUEST_FAILED:
      return {
        ...state,
        actualLocation: null
      }
    case types.FETCH_LOCATION_SUCCEEDED:
      return {
        ...state,
        actualLocation: action.payload.location
      }
    default:
      return state
  }
}