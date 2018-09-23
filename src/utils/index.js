import hash from 'object-hash'

export function waitToDimissNotification() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 4000)
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