import { Box, Divider, Paper, Stack, Typography, styled, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { ResponsiveContainer, LineChart as LC, Line, Tooltip } from 'recharts'

const DashBox = styled(Box)(({ theme }) => ({

    borderRadius: '10px',
    transition: 'ease 0.2s',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    ':hover': {

        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

    },

}))

const activeStyle = (theme) => ({

    backgroundColor: theme.palette.primary.light,
    transform: 'translateY(-5px)',
    boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

})


export const LineChart = ({ title, particle, deviceData, dataReady = false, active = false }) => {

    const theme = useTheme()
    const [lastMeasure, setlastMeasure] = useState(null)

    useEffect(() => {

        if (dataReady) {

            setlastMeasure(deviceData[deviceData.length - 1][particle])

        }
    }, [deviceData])

    return (
        <DashBox component={Paper} elevation={3} sx={active ? activeStyle(theme) : {}}>

            <Box width={'100%'} height={'100%'} position={'relative'}>
                <Stack height={'100%'} p={2}>
                    <Box height={'25%'}>
                        <Typography variant={'h5'} sx={{ fontSize: { xs: '5vw', sm: '3vw', md: '1.5vw', xl: '1vw' } }}><b>{title}</b></Typography>
                        <Divider variant='middle' />
                    </Box>
                    <Box height={'75%'} >
                        <ResponsiveContainer width={'100%'} height={'80%'}>
                            <LC data={deviceData} >

                                <Line dataKey={particle} fill={theme.palette.secondary.main} stroke={theme.palette.secondary.main} dot={false}/>
                                <Tooltip active={true} cursor={false} position={{ y: 100 }} />

                            </LC>
                        </ResponsiveContainer>
                    </Box>
                </Stack>
                <Typography variant='h5' position={'absolute'} sx={{ bottom: '10%', fontSize: {xs: '7.5vw', md: '2.5vw', xl: '1vw'} }} width={'100%'} textAlign={'center'}><b>{lastMeasure}</b> ppm</Typography>

            </Box >
        </DashBox>
    )
}
