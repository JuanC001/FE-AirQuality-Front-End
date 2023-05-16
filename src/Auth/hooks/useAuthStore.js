import { useContext } from "react"
import { AirqualityApi } from "../../api/airQualityApi"
import { UserContext } from "../../Global/Context/UserContext"

import Swal from "sweetalert2"

export const useAuthStore = () => {

    const { loggedIn } = useContext(UserContext);

    const startLogin = async (user, password) => {

        try {

            const resp = await AirqualityApi.post('/auth/login', { user, password });

            if (resp.status === 200) {

                console.log('Logged in as ' + JSON.stringify(resp.data.role))
                loggedIn(resp.data);

            } else if (resp.status === 401) {

                Swal.fire(
                    {
                        icon: 'error',
                        title: 'Ooops! Algo salió Mal...',
                        text: 'Contraseña o usuario equivocado'
                    }
                )

            }

            return true;

        } catch (err) {


            if (err.response.status === 401) {
                Swal.fire(
                    {
                        icon: 'error',
                        title: 'Ooops! Algo salió Mal...',
                        text: 'Contraseña o usuario incorrectos'
                    }
                )
            } else {
                Swal.fire(
                    {
                        icon: 'error',
                        title: 'Ooops! Algo salió Mal...',
                        text: 'Servidor en mantenimiento'
                    }
                )
            }

        }

    }

    return {
        startLogin
    }

}