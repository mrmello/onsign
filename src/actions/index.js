import types from "./Types"

/**
 * Action to be dispatched when a user request a location
 */
export const fetchLocation = (payload) => ({
  type: types.FETCH_LOCATION_REQUESTED,
  payload: payload
})

/**
 * Action to be dispatched when the fetching location succeeds
 */
export const fetchLocationSucceeded = (payload) => ({
  type: types.FETCH_LOCATION_SUCCEEDED,
  payload: payload
})

/**
 * Action to be dispatched whenever any request fails
 */
export const requestFailed = (payload) => ({
  type: types.REQUEST_FAILED,
  payload: payload
})

/**
 * Action to be dispatched to fetch weather
 */
export const fetchWeather = (payload) => ({
  type: types.FETCH_WEATHER_REQUESTED,
  payload: payload
})

/**
 * Action to be dispatched when weather data fetching succeeds
 */
export const fetchWeatherSucceeded = (payload) => ({
  type: types.FETCH_WEATHER_SUCCEEDED,
  payload: payload
})

/**
 * Action to be dispatched when the requested weather loaction
 * is present and meet the cache hit requiremnts
 */
export const weatherCacheHit = (payload) => ({
  type: types.RESPONSE_FROM_CACHE,
  payload: payload
})

/**
 * Action to be dispatched to dismiss the notification
 */
export const dimissNotification = () => ({
  type: types.DISMISS_NOTIFICATION
})