import React, { useState } from 'react'
import { DashboardContext } from './DashboardContext'
import { useDevices } from '../Hooks/useDevices'

export const DashboardProvider = ({ children }) => {

    const { getAllDevices, getOneDevice } = useDevices()

    const [devices, setDevices] = useState(null)
    const [deviceInfo, setDeviceInfo] = useState(null)
    const [deviceData, setDeviceData] = useState(null)

    const [dataReady, setDataReady] = useState(false)

    const DATATYPES = {

        PM25: 'pm25',
        TMP: 'temp',
        PRS: 'pressure',
        PM10: 'pm10',
        HMD: 'rh',

    }

    const getList = async () => {

        const resp = await getAllDevices()
        setDevices(resp)


    }

    const setDevice = async (rowInfo) => {

        setDataReady(false)
        setDeviceInfo(rowInfo)
        const resp = await getOneDevice(rowInfo._id)
        setDeviceData(resp)
        setDataReady(true)

    }

    return (
        <DashboardContext.Provider value={{

            devices,
            deviceInfo,
            deviceData,
            dataReady,

            getList,
            setDevice,
            setDeviceData,

        }}>
            {children}
        </DashboardContext.Provider>
    )

}
