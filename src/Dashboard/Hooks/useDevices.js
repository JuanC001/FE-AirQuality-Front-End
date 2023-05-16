import AirqualityApi from "../../api/airqualityApi"

export const useDevices = () => {

    const getAllDevices = async () => {
        const devices = await AirQualityApi.post('/device/getAllList')
        return devices.data
    }

    const getOneDevice = async (id) => {

        const device = await AirQualityApi.post('/device/getOneDevice', { id })
        return device.data
    }

    return {

        getAllDevices,
        getOneDevice

    }

}
