import React, { useEffect, useState } from 'react'
import { DashboardContext } from './DashboardContext'
import { useDevices } from '../Hooks/useDevices'

import { useAuthStore } from '../../Auth/hooks/useAuthStore'
import Swal from 'sweetalert2'

export const DashboardProvider = ({ children }) => {

    const DATATYPES = {

        pm25: 'pm25',
        temp: 'temp',
        pressure: 'pressure',
        pm10: 'pm10',
        rh: 'rh',

    }


    const { checkAuthToken, closeSession } = useAuthStore()
    const { getAllDevices, getOneDevice } = useDevices()

    const [devices, setDevices] = useState(null)
    const [deviceInfo, setDeviceInfo] = useState(null)
    const [deviceData, setDeviceData] = useState(null)

    const [dataReady, setDataReady] = useState(false)

    const [keyActive, setKeyActive] = useState(DATATYPES.pm25)

    const [timer, setTimer] = useState(0)

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

    const getDevice = async () => {

        try {

            if (!deviceInfo) return
            const newArray = [...devices]
            const resp = await getOneDevice(deviceInfo._id)

            for (let i = 0; i < newArray.length; i++) {

                if (newArray[i]._id === deviceInfo._id) {
                    if (resp.lastUpdated !== deviceInfo.lastUpdated) {

                        deviceInfo.lastUpdated = resp.lastUpdated
                        newArray[i].lastUpdated = resp.lastUpdated
                        setDevices(newArray)
                        setDeviceData(resp)

                    }
                }

            }

        } catch (error) {

            Swal.fire({
                title: 'Tu sesión ha expirado',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
            closeSession()

        }

    }

    useEffect(() => {

        const interval = setInterval(() => {
            getDevice()
            setTimer(60000)
        }, timer)
        return () => clearInterval(interval)

    })


    return (
        <DashboardContext.Provider value={{

            devices,
            deviceInfo,
            deviceData,
            dataReady,
            keyActive,
            DATATYPES,

            getList,
            setDevice,
            setDeviceData,
            setKeyActive

        }}>
            {children}
        </DashboardContext.Provider>
    )

}
