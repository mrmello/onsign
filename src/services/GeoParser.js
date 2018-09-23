import { createLocationThreeDecimalPrecision } from "../utils"

/**
 * Rejects the promise if the response is invalid or resolves with a parsed response.
 * Creates an array to show only the data that is returned from the API,
 * because for some entries not all the attributes will return as for
 * example searching for a Country will not return State Name.
 */
export default function parseGeoResult(response) {
  return new Promise((resolve, reject) => {
    if(response.data.status !== "OK") {
      reject(new Error("Invalid Geocoding response"))
    } else {
      const lastLocation = response.data.results[0]
      const threeCaseslocation = createLocationThreeDecimalPrecision(lastLocation.geometry.location)
      let filteredData = []
      filteredData.push({attr: "Latitude", value : threeCaseslocation.lat})
      filteredData.push({attr: "Longitude", value : threeCaseslocation.lng})
      Object.keys(lastLocation.address_components).forEach(function(key){
        let component = lastLocation.address_components[key]
        if(component.types.includes('sublocality') || component.types.includes('locality')) {
          filteredData.push({attr: "City", value : component.long_name})
        }
        else if (component.types.includes('administrative_area_level_1')) {
          filteredData.push({attr: "State Name", value : component.short_name})
        }
        else if (component.types.includes('country')) {
          filteredData.push({attr: "Country", value : component.long_name})
        }
      })
      const geoResponse = {
        coordinates: lastLocation.geometry.location,
        location : filteredData,
      }
      resolve(geoResponse)
    }
  })
}