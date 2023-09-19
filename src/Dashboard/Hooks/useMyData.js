import AirqualityApi from "../../api/airqualityApi"

export const useMyData = () => {

    const changePassword = async (uid, lastPassword, newPassword) => {

        try {

            const response = await AirqualityApi.post('/user/changePassword', { uid, lastPassword, newPassword })
            return response.data

        } catch (error) {

            return error.response.data

        }

    }

    return {

        changePassword

    }

}