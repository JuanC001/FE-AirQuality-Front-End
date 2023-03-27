import { Box, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Tooltip, ResponsiveContainer, BarChart, Bar, Label, LabelList, Customized } from 'recharts'
import { DashboardContext } from '../../Context/DashboardContext'

export const Graph = (props) => {

    const { deviceSelected, selectedMeasure, ready } = useContext(DashboardContext)

    const theme = useTheme()

    const cursor = {
        fill: theme.palette.secondary.main
    }
    const data = [

        { name: '1', temp: '10', pm25: '500', pm10: '236', hum: '40', pres: '100' },
        { name: '2', temp: '13', pm25: '220', pm10: '246', hum: '38', pres: '130' },
        { name: '3', temp: '11', pm25: '130', pm10: '279', hum: '36', pres: '125' },
        { name: '4', temp: '10', pm25: '132', pm10: '300', hum: '34', pres: '135' },
        { name: '5', temp: '10', pm25: '136', pm10: '196', hum: '31', pres: '137' },
        { name: '6', temp: '9', pm25: '131', pm10: '198', hum: '38', pres: '186' },
        { name: '7', temp: '9', pm25: '111', pm10: '189', hum: '32', pres: '157' },
        { name: '8', temp: '12', pm25: '132', pm10: '185', hum: '35', pres: '138' },
        { name: '9', temp: '13', pm25: '132', pm10: '182', hum: '30', pres: '157' },
        { name: '10', temp: '11', pm25: '136', pm10: '170', hum: '11', pres: '154' },

    ]
    const onHover = 'black'
    const unHover = 'black'
    const [styleLabel, setStyleLabel] = useState(unHover);

    if (ready === false) {

        return (
            <h1>Loading...</h1>
        )

    } else {

        return (
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart data={deviceSelected.measures} margin={{ top: 100 }}>
                    <Bar dataKey={'pm25'} fill={theme.palette.primary.main} onMouseEnter={e => setStyleLabel(onHover)} onMouseOut={e => setStyleLabel(unHover)}>
                        <LabelList dataKey={'pm25'} position={'top'} stroke={styleLabel} fill={styleLabel} />
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        )
    };


}