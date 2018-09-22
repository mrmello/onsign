import Store from '../store'
import { fetchLocation } from '.'

export const locationService = (values) => {
    Store.dispatch(fetchLocation(values))
}