import { AirqualityApi } from "../../api/airQualityApi"

export const useDevices = () => {

    const getAllDevices = async () => {
        const devices = await airqualityApi.post('/device/getAllList')
        return devices.data
    }

    const getOneDevice = async (id) => {

        const device = await airqualityApi.post('/device/getOneDevice', { id })
        return device.data
    }

    return {

        getAllDevices,
        getOneDevice

    }

}
