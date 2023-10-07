import { Box, CircularProgress, Typography, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import { DashboardContext } from '../../../../Context/DashboardContext'
import { Bar, ResponsiveContainer, BarChart as BC, LabelList, Tooltip, Brush, XAxis, ComposedChart, Line } from 'recharts'

export const BarChart = () => {

    const { deviceData, deviceInfo, dataReady, keyActive } = useContext(DashboardContext)
    const theme = useTheme()

    if (deviceInfo === null) {
        return (
            <Box width={'100%'} height={'93%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                <Typography variant="h4" color="primary.main"><strong>Selecciona un dispositivo</strong></Typography>

            </Box>
        )
    }


    const cutNumber = (num) => {

        return +(Math.round(num + "e+1") + "e-1");

    }

    return (

        <Box width={'100%'} height={'93%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

            {!dataReady && <CircularProgress variant='indeterminate' size={100} />}
            {dataReady &&
                <Box width={'100%'} height={'100%'}>

                    <ResponsiveContainer width={'100%'} height={'100%'}>

                        <ComposedChart data={deviceData.measures} margin={{ top: 100 }}>
                            <Brush dataKey={keyActive} height={30} stroke={theme.palette.primary.main} travellerWidth={20} />

                            <Bar dataKey={keyActive} fill={theme.palette.primary.main}>

                                <LabelList dataKey={keyActive} position={'top'} formatter={cutNumber} />

                            </Bar>
                            <Tooltip />
                            <XAxis dataKey="date" />
                        </ComposedChart>

                    </ResponsiveContainer>


                </Box>}

        </Box>

    )
}
