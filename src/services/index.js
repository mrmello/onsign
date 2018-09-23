import axios from 'axios'
import endpoints from './Endpoints'
import env from '../env/Env'
/**
 * Runs the requests to the APIs using axios
 */
export default {
    fetchLocationFromAPI: (payload)  => axios.get(`${endpoints.GOOGLE_API}${payload.location}&key=${env.GOOGLE_API_KEY}`),
    fetchWeatherFromAPI:  (payload)  => axios.get(`${endpoints.OPEN_WEATHER_API}lat=${payload.lat}&lon=${payload.lng}&appid=${env.OPEN_WHATHER_API_KEY}`),
}