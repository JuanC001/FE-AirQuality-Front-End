import { useEffect, useState, useContext } from "react"
import { useDevices } from "../../../Hooks/useDevices"

import { UserContext } from '../../../../Global/Context/UserContext'

export const useDevice = () => {

    const { user } = useContext(UserContext);

    const { getOneDevice } = useDevices()
    const [deviceData, setDeviceData] = useState(null)
    const [dataReady, setDataReady] = useState(false)
    const [activeKey, setActiveKey] = useState('temp')
    const [timer, setTimer] = useState(0)

    const [activeKeys, setActiveKeys] = useState({
        temp: true,
        rh: false,
        pressure: false,
        pm25: false,
        pm10: false
    })

    const [lastMeasures, setLastMeasures] = useState({
        pm25: 0,
        pm10: 0,
        rh: 1,
        temp: 1,
        pressure: 1
    })

    const handleChange = (key) => {

        if (activeKeys[key] === true) return

        setActiveKeys({
            temp: false,
            rh: false,
            pressure: false,
            pm25: false,
            pm10: false,
            [key]: !activeKeys[key]
        })

        setActiveKey(key)

    }

    const handleDevice = async () => {

        const data = await getOneDevice(user.device)
        setDeviceData(data)
        setLastMeasures({
            pm25: data.measures[data.measures.length - 1].pm25,
            pm10: data.measures[data.measures.length - 1].pm10,
            rh: data.measures[data.measures.length - 1].rh,
            temp: data.measures[data.measures.length - 1].temp,
            pressure: data.measures[data.measures.length - 1].pressure
        })

        setDataReady(true)
    }

    useEffect(() => {

        handleDevice()

    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            handleDevice()
            setTimer(150000)
        }, timer)
        return () => clearInterval(interval)

    })

    return {

        lastMeasures,
        activeKeys,
        deviceData,
        dataReady,
        activeKey,

        handleChange

    }

}