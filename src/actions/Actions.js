import types from "./Types"

export const fetchLocation = (location) => ({
  type: types.FETCH_LOCATION_REQUESTED,
  payload: location
})