import AirqualityApi from "../../api/airqualityApi"

const token = localStorage.getItem('token')

export const useDevices = () => {

    const getAdminDeviceList = async () => {
        const devices = await AirqualityApi.post('/admin/getDeviceList')
        if (devices.status === 401) {
            console.log('Bloqueado, sesión expirada')
        }
        return devices.data
    }

    const getAllDevices = async () => {

        try {

            const devices = await AirqualityApi.post('/device/getAllList', {}, {
                headers: {
                    'x-token': token
                }
            })

            return devices.data

        } catch (error) {
            console.log("Sesion Expirada")
            return "Token invalido"
        }
    }

    const getOneDevice = async (id) => {

        const device = await AirqualityApi.post('/device/getOneDevice', { id })
        return device.data
    }

    return {

        getAllDevices,
        getOneDevice,
        getAdminDeviceList

    }

}
