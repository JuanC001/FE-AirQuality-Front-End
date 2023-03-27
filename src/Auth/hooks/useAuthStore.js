import { useContext } from "react"
import { airqualityApi } from "../../api"
import { UserContext } from "../../Global/Context/UserContext"

export const useAuthStore = () => {

    const { loggedIn } = useContext(UserContext);

    const startLogin = async (user, password) => {

        try {

            const resp = await airqualityApi.post('/auth/login', { user, password });

            if (resp.status === 200) {

                console.log('Logged in as ' + JSON.stringify(resp.data.role))
                loggedIn(resp.data);

            }

            return true;

        } catch (err) {
            console.log(err)
        }

    }

    return {
        startLogin
    }

}