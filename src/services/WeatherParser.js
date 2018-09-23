import { createLocationThreeDecimalPrecision, createHashedValue, oneHourFromNow } from '../utils'

export default function weatherParser(response, requestedLocation) {
  return new Promise((resolve, reject) => {
    if(!response.data.main) {
      reject(new Error("Awn :( The Weather Request Failed"))
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
