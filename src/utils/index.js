import hash from 'object-hash'

export function waitToDimissNotification() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
}

export function createLocationThreeDecimalPrecision(location) {
  let obj = {}
  obj.lat = location.lat.toFixed(3)
  obj.lng = location.lng.toFixed(3)
  return obj
}

export function createHashedValue(obj){
  return hash(obj)
}

export function oneHourFromNow() {
  let now = new Date(), oneHour = new Date()
  oneHour.setHours(now.getHours()+1)
  return oneHour
}

function hasExpired(cachedTime) {
  let now = new Date()
  if(now > cachedTime) {
    return true
  }
  return false
}

export function cacheHit(cachedValue, location) {
  if(cachedValue.hashedLocation === createHashedValue(location) && !hasExpired(cachedValue.expiresOn)){
    return true
  }
  return false
}

export function getDataFromLocalStorage() {
  if(!localStorage.getItem("weatherData")) {
    return []
  }
  return JSON.parse(localStorage.getItem("weatherData"))
}

export function saveWeatherData(data){
  if(localStorage.getItem("weatherData")) {
    let savedData = JSON.parse(localStorage.getItem("weatherData"))
    savedData.push(data)
    localStorage.setItem("weatherData", JSON.stringify(savedData))
  } else {
    localStorage.setItem("weatherData",  JSON.stringify([data]))
  }
}