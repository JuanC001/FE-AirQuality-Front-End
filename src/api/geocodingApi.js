import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_GEOCODING_KEY } = getEnvVariables()

const GeocodingApi = axios.create({

    baseURL: VITE_API_GEOCODING_KEY

})

export default GeocodingApi
