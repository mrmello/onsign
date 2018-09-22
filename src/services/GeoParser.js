import hash from 'object-hash'

export default function parseGeoResult(response) {
  return new Promise((resolve, reject) => {
    if(response.data.status !== "OK") {
      reject(new Error(response.data.status))
    } else {
      const lastLocation = response.data.results[0]
      let location = []
      location.push({attr: "Latitude", value : lastLocation.geometry.location.lat})
      location.push({attr: "Longitude", value : lastLocation.geometry.location.lng})
      Object.keys(lastLocation.address_components).forEach(function(key){
        let component = lastLocation.address_components[key]
        if(component.types.includes('sublocality') || component.types.includes('locality')) {
          location.push({attr: "City", value : component.long_name})
        }
        else if (component.types.includes('administrative_area_level_1')) {
          location.push({attr: "State Name", value : component.short_name})
        }
        else if (component.types.includes('country')) {
          location.push({attr: "Country", value : component.long_name})
        }
      })
      const hashedLocation = hash(lastLocation.geometry.location)
      const geoResponse = {
        coordinates: lastLocation.geometry.location,
        [hashedLocation] : location
      }
      resolve(geoResponse)
    }
  })
}