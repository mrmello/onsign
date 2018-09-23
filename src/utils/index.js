import hash from 'object-hash'
const LAT_LNG_PATTERN = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/g
/**
 * Waits for 5 seconds to dismiss the notification
 */
export function waitToDimissNotification() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
}

/**
 * Creates an latitude/longitude object with three decimal case precision
 */
export function createLocationThreeDecimalPrecision(location) {
  let obj = {}
  obj.lat = location.lat.toFixed(3)
  obj.lng = location.lng.toFixed(3)
  return obj
}

/**
 * Hashes an object using the object-hash lib
 */
export function createHashedValue(obj){
  return hash(obj)
}

/**
 * Returns a Date with one hour ahead of the current time.
 * Used for the cache "expiresOn" attribute
 */
export function oneHourFromNow() {
  let now = new Date(), oneHour = new Date()
  oneHour.setHours(now.getHours()+1)
  return oneHour
}

/**
 * Compares if the current time is after the cache expiration value
 */
function hasExpired(cachedTime) {
  if(new Date() > new Date(cachedTime)) {
    return true
  }
  return false
}

/**
 * Returns true when the weather was already requested within a one hour window
 * for a given three decimal cases precision latitude/longitude
 */
export function cacheHit(cachedValue, location) {
  if(cachedValue.hashedLocation === createHashedValue(location) && !hasExpired(cachedValue.expiresOn)){
    return true
  }
  return false
}

/**
 * Retrieves the weatherData array from the localStorage
 */
export function getDataFromLocalStorage() {
  if(!localStorage.getItem("weatherData")) {
    return []
  }
  return JSON.parse(localStorage.getItem("weatherData"))
}

/**
 * Store new fetched data from the weather API or updates the expired ones
 */
export function saveWeatherData(data){
  if(localStorage.getItem("weatherData")) {
    let savedData = JSON.parse(localStorage.getItem("weatherData"))
    let keyContains
    Object.keys(savedData).forEach(function(key){
      if(savedData[key].hashedLocation === data.hashedLocation) {
        keyContains = key
      }
    })
    if(keyContains){
      savedData.splice(keyContains, 1, data)
    } else {
      savedData.push(data)
    }
    localStorage.setItem("weatherData", JSON.stringify(savedData))
  } else {
    localStorage.setItem("weatherData",  JSON.stringify([data]))
  }
}

/**
 * Returns true if the searched term is a valid geographic coordinate
 */
export function isReverseSearch(search) {
  var regx = new RegExp(LAT_LNG_PATTERN)
  if(search.location.match(regx)) {
    return true
  }
  return false
}