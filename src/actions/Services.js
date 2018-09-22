import Store from '../store'
import { fetchLocation } from './Actions'

export const locationService = (values) => {
    Store.dispatch(fetchLocation(values))
}