import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { ResponsiveContainer, LineChart as LC, Line, Tooltip } from 'recharts'

export const LineChart = ({ title, particle, deviceData, dataReady = false }) => {

    const theme = useTheme()
    const [lastMeasure, setlastMeasure] = useState(null)

    useEffect(() => {

        if (dataReady) {

            setlastMeasure(deviceData[deviceData.length - 1][particle])

        }
    }, [deviceData])

    return (
        <Box width={'100%'} height={'100%'} position={'relative'}>
            <Stack height={'100%'} p={2}>
                <Box height={'25%'}>
                    <Typography variant={'h5'}><b>{title}</b></Typography>
                    <Divider variant='middle' />
                </Box>
                <Box height={'75%'} >
                    <ResponsiveContainer width={'100%'} height={'80%'}>
                        <LC data={deviceData} >

                            <Line dataKey={particle} fill={theme.palette.secondary.main} stroke={theme.palette.secondary.main} />
                            <Tooltip active={true} cursor={false} position={{ y: 100 }} />

                        </LC>
                    </ResponsiveContainer>
                </Box>
            </Stack>
            <Typography variant='h5' position={'absolute'} sx={{ bottom: '10%' }} width={'100%'} textAlign={'center'}><b>{lastMeasure}</b> ppm</Typography>

        </Box >
    )
}
