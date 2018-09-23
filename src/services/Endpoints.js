/**
 * Groups the urls as CONSTANTS and returns the object to be consumed by whoever needs
 */

const endpoints = {
  GOOGLE_API         :   'https://maps.googleapis.com/maps/api/geocode/json?address=',
  GOOGLE_API_REVERSE :   'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
  OPEN_WEATHER_API   :   'https://api.openweathermap.org/data/2.5/weather?units=metric&'
}

export default endpoints