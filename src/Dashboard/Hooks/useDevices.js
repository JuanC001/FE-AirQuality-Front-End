import AirqualityApi from "../../api/airqualityApi"

const token = localStorage.getItem('token')

export const useDevices = () => {

    const getAdminDeviceList = async () => {
        const devices = await AirqualityApi.post('/admin/getDeviceList')
        return devices.data
    }

    const getAllDevices = async () => {
        const devices = await AirqualityApi.post('/device/getAllList', {}, {
            headers: {
                'x-token': token
            }
        })
        return devices.data
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
