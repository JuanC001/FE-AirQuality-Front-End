import { getEnvVariables } from '../../helpers'
import axios from 'axios'

const { VITE_API_URL } = getEnvVariables()

export const useLogin = () => {

    const authLogin = async (user, password) => {

        const ipBuilder = VITE_API_URL + 'auth/login';
        const userS = await axios.post(ipBuilder, {
            user,
            password
        })

    }

    return {
        authLogin
    }
}
