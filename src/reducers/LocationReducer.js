import types from '../actions/Types'

const initialState = {
  actualLocation: null
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_LOCATION_SUCCEEDED:
      return {
        ...state,
        actualLocation: action.payload.filteredData
      }
    case types.REQUEST_FAILED:
      return {
        ...state,
        actualLocation: null
      }
    default:
      return state
  }
}