import Store from '../store'
import { fetchLocation } from '.'

export const locationSubmitter = (values) => {
    Store.dispatch(fetchLocation(values))
}