import { Box, CircularProgress, Typography, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { DashboardContext } from '../../../../Context/DashboardContext'
import { Bar, ResponsiveContainer, BarChart as BC, LabelList, Tooltip } from 'recharts'

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

                        <BC data={deviceData.measures} margin={{ top: 100 }}>
                            <Bar dataKey={keyActive} fill={theme.palette.primary.main}>

                                <LabelList dataKey={keyActive} position={'top'} formatter={cutNumber} />

                            </Bar>
                            <Tooltip />
                        </BC>

                    </ResponsiveContainer>


                </Box>}

        </Box>

    )
}
