import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip, Legend, Line, ResponsiveContainer, ReferenceDot, Customized } from 'recharts'
import { DashboardContext } from '../../../Context/DashboardContext'

export const PMChart = ({ particle }) => {

    const { deviceSelected, selectedMeasure, ready } = useContext(DashboardContext)

    if (!ready) return;


    const theme = useTheme()

    const dataChartLabel = particle;
    const lineColor = theme.palette.secondary.main;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <Box className="custom-tooltip">
                    <Typography variant="h6" color="initial">{payload[0].value} PPM</Typography>
                </Box>
            );
        }

        return null;
    };

    const selectorParticula = () => {

        if (deviceSelected.measures === undefined) return;

        if (particle === 'pm25') {

            return deviceSelected.measures[19].pm25

        } else {
            return deviceSelected.measures[19].pm10
        }

    }

    return (

        <>
            <ResponsiveContainer width={"100%"} height={"80%"}>
                <LineChart data={deviceSelected.measures} >
                    <Line dataKey={dataChartLabel} stroke={lineColor} strokeWidth={2} dot={false} type={'monotone'} />
                    <Tooltip active={true} cursor={false} content={<CustomTooltip />} position={{ y: 100 }} />
                </LineChart>
            </ResponsiveContainer>
            <Typography variant='h5' textAlign={'center'} my={1}><strong>{selectorParticula()}PPm</strong></Typography>
        </>

    )
}