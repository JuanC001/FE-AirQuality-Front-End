import { useEffect, useState } from "react"
import { airqualityApi } from "../../../api"

export const useDevices = () => {


    const getAllDevices = async () => {

        const devicesList = await airqualityApi.post('/device/getAllList')
        return devicesList.data

    }

    const getOneDevice = async (id) => {

        const device = await airqualityApi.post('/device/getOneDevice', {id})
        return device.data

    }

    return {
        getAllDevices,
        getOneDevice
    }
}
