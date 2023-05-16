import { airqualityApi as api } from "../../api/airQualityApi"

export const useDevices = () => {

    const getAllDevices = async () => {
        const devices = await api.post('/device/getAllList')
        return devices.data
    }

    const getOneDevice = async (id) => {

        const device = await api.post('/device/getOneDevice', { id })
        return device.data
    }

    return {

        getAllDevices,
        getOneDevice

    }

}
