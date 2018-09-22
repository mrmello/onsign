import types from '../actions/Types'

const initialState = {
  message: null
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.REQUEST_FAILED:
      return {
        message: action.payload.message
      }
    case types.DISMISS_NOTIFICATION:
      return {
        initialState
      }
    default:
      return state
  }
}