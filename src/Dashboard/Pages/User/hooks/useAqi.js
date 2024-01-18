import React, { useState } from 'react'

export const useAqi = () => {

    const [AQI, setAQI] = useState(0)

    const calculateAqi = (data) => {

        let measures = data.measures
        let sumAqi = 0

        measures.map(measure => {

            let pm = measure.pm25
            sumAqi += pm

        })

        let aqi = sumAqi / measures.length

        setAQI(cutNumber(aqi))

    }

    const cutNumber = (num) => {

        return +(Math.round(num + "e+1") + "e-1");

    }

    return { AQI, calculateAqi }
}
