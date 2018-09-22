
export default function weatherParser(response) {
  return new Promise((resolve, reject) => {
    if(!response.data.main) {
      reject(new Error("Awn :( The Weather Request Failed"))
    } else {
      const weatherResult = response.data.main.temp
      resolve(weatherResult)
    }
  })
}
