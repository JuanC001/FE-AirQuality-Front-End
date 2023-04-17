import React, { useEffect, useState } from 'react'
import { useDevices } from '../Investigator/hooks/useDevices'
import { DashboardContext } from './DashboardContext'

export const DashboardProvider = ({ children }) => {

    const [selectedMeasure, setselectedMeasure] = useState('pm25')
    const [deviceSelected, setdeviceSelected] = useState([])
    const [deviceString, setdeviceString] = useState('')
    const [devicesList, setdevicesList] = useState([])
    const [measuresSelected, setMeasuresSelected] = useState([])
    const [ready, setready] = useState(false)

    const [timer, setTimer] = useState(2000)

    const { getAllDevices, getOneDevice } = useDevices()

    const getAllList = async () => {
        const resp = await getAllDevices()
        setdevicesList(resp)

    }

    const getSelected = async () => {
        const resp = await getOneDevice(deviceString)
        setdeviceSelected(resp)
    }

    useEffect(() => {

        getSelected()

    }, [deviceString])

    useEffect(() => {

        const interval = setInterval(() => {

            getAllList()
            if (ready) getSelected()
            setTimer(10000)
        }, timer)
        return () => clearInterval(interval)

    })

    return (
        <DashboardContext.Provider value={{
            selectedMeasure, deviceSelected, deviceString, devicesList, measuresSelected, ready,
            setdeviceString, setready
        }}>
            {children}
        </DashboardContext.Provider>
    )
}
