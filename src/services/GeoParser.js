import hash from 'object-hash'

export default function parseGeoResult(data) {
  return new Promise((resolve, reject) => {

    const geoResponse = data.data
    Object.keys(geoResponse.results).forEach(function(result) {
      console.log(hash(geoResponse.results[result].geometry.location))
    })
    if (geoResponse) {
      resolve(geoResponse)
    } else {
      reject(new Error('Unable to parse login result. No session result.'))
    }
  })
}
