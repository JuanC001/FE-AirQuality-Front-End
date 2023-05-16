import AirqualityApi from "../../api/airqualityApi"

export const useDevices = () => {

    const getAllDevices = async () => {
        const devices = await AirqualityApi.post('/device/getAllList')
        return devices.data
    }

    const getOneDevice = async (id) => {

        const device = await AirqualityApi.post('/device/getOneDevice', { id })
        return device.data
    }

    return {

        getAllDevices,
        getOneDevice

    }

}
