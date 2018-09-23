import types from "./Types"

export const fetchLocation = (payload) => ({
  type: types.FETCH_LOCATION_REQUESTED,
  payload: payload
})

export const fetchLocationSucceeded = (payload) => ({
  type: types.FETCH_LOCATION_SUCCEEDED,
  payload: payload
})

export const requestFailed = (payload) => ({
  type: types.REQUEST_FAILED,
  payload: payload
})

export const fetchWeather = (payload) => ({
  type: types.FETCH_WEATHER_REQUESTED,
  payload: payload
})

export const fetchWeatherSucceeded = (payload) => ({
  type: types.FETCH_WEATHER_SUCCEEDED,
  payload: payload
})

export const weatherCacheHit = (payload) => ({
  type: types.RESPONSE_FROM_CACHE,
  payload: payload
})

export const dimissNotification = () => ({
  type: types.DISMISS_NOTIFICATION
})