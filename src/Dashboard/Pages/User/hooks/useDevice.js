import { useEffect, useState } from "react"
import { useDevices } from "../../../Hooks/useDevices"

export const useDevice = () => {

    const { getOneDevice } = useDevices()
    const [deviceData, setDeviceData] = useState(null)
    const [dataReady, setDataReady] = useState(false)
    const [activeKey, setActiveKey] = useState('temp')

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

        console.log(Object.keys(activeKeys).filter(key => activeKeys[key] === true)[0])

    }

    const handleDevice = async () => {

        const data = await getOneDevice('64dac03ac00bf9548e1c9311')
        setDeviceData(data)
        setLastMeasures({
            pm25: data.measures[data.measures.length - 1].pm25,
            pm10: data.measures[data.measures.length - 1].pm10,
            hum: data.measures[data.measures.length - 1].rh,
            temp: data.measures[data.measures.length - 1].temp,
            pressure: data.measures[data.measures.length - 1].pressure
        })
        console.log(data)
        setDataReady(true)
    }

    useEffect(() => {

        handleDevice()

    }, [])

    return {

        lastMeasures,
        activeKeys,
        deviceData,
        dataReady,

        handleChange

    }

}