import types from '../actions/Types'

const initialState = {
  locations: [],
  lastLocation: null,
  searchedTerm: ""
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_LOCATION_REQUESTED:
      return {
        ...state,
        searchedTerm: action.payload
      }
    case types.FETCH_LOCATION_SUCCEEDED:
      return {
        ...state,
        locations: [...state.locations, action.payload],
        lastLocation: action.payload[Object.keys(action.payload)[1]]
      }
    default:
      return state
  }
}