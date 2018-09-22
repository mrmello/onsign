import axios from 'axios'
import endpoints from './Endpoints'
import config from '../config/Config'

export default {
    fetchLocationFromAPI: (payload)  => axios.get(`${endpoints.GOOGLE_API}${payload.location}&key=${config.GOOGLE_API_KEY}`),
}