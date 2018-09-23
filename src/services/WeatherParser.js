import { createLocationThreeDecimalPrecision, createHashedValue, oneHourFromNow } from '../utils'
/**
 * Rejects the promise if the response is invalid.
 * Resolves for a weather object ready to be render and stored in
 * localStorage through a hashCode of three decimal case precision latitude
 * and longitude object. This object also contains the cache expiration time.
 */
export default function weatherParser(response, requestedLocation) {
  return new Promise((resolve, reject) => {
    if(!response.data.main) {
      reject(new Error("Invalid wheater response"))
    } else {
      const location = createLocationThreeDecimalPrecision(requestedLocation)
      const weatherResult = {
        hashedLocation: createHashedValue(location),
        requestedLocation: location,
        temp: response.data.main.temp,
        expiresOn: oneHourFromNow()
      }
      resolve(weatherResult)
    }
  })
}
