import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import { motion } from 'framer-motion'
import { useAqi } from '../hooks/useAqi'

export const Quality = ({ deviceData, dataKey }) => {


    const { calculateAqi, AQI } = useAqi()

    useEffect(() => {

        if (deviceData === null) return
        calculateAqi(deviceData)

    }, [deviceData])

    return (
        <Box height={'100%'} py={2} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'} sx={{ overflow: 'hidden' }}>


            <Box component={motion.div} whileHover={{ rotate: -10, scale: 0.8, transition: { duration: 10, repeat: Infinity } }} animate={{ rotate: [360, 180, 360, 270], transition: { repeat: Infinity, duration: 10 } }} position={'absolute'} m={'auto'} sx={{
                borderRadius: '50%',
                border: '10px dotted lightblue',
                zIndex: 1,
                width: '400px',
                height: '400px',
            }} />

            <Box textAlign={'center'} height={'300px'} width={'300px'} display={'flex'} alignItems={'center'} position={'relative'}>

                <CircularProgress size={300} variant='detWDerminate' value={75} />
                <Box position={'absolute'} sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Stack>
                        <Typography variant={'h1'}>{AQI}</Typography>
                        <Typography variant={'body1'}>AQI <b>Buena</b></Typography>
                    </Stack>
                </Box>
            </Box>

        </Box>
    )
}
