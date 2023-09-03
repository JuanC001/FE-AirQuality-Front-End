import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()

const AirqualityApi = axios.create({

    baseURL: VITE_API_URL

})

AirqualityApi.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token')
        if (token) {
            config.headers['x-token'] = token
        }
        return config
    }
)

export default AirqualityApi

