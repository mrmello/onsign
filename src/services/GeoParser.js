import hash from 'object-hash'

export default function parseGeoResult(response) {
  return new Promise((resolve, reject) => {
    if(response.data.status !== "OK") {
      reject(new Error(response.data.status))
    } else {
      const geoResponse = response.data
      Object.keys(geoResponse.results).forEach(function(result) {
        console.log(hash(geoResponse.results[result].geometry.location))
      })
      resolve(geoResponse)
    }
  })
}
