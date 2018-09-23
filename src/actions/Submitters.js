import Store from '../store'
import { fetchLocation } from '.'

/**
 * Submits the action to the store in order to perform an API request
 */
export const locationSubmitter = (values) => {
    Store.dispatch(fetchLocation(values))
}