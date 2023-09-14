import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'

import { motion } from 'framer-motion'

export const Quality = () => {
    return (
        <Box height={'100%'} py={2} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'}>


            <Box component={motion.div} whileHover={{ rotate: -10, scale: 0.8, transition: { duration: 10, repeat: Infinity } }} animate={{ rotate: 360, transition: { repeat: Infinity, duration: 10, ease: 'easeInOut' } }} width={'400px'} height={'400px'} position={'absolute'} m={'auto'} sx={{
                borderRadius: '50%',
                border: '10px dotted lightblue',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 1,
            }}>


            </Box>

            <Box textAlign={'center'} height={'300px'} width={'300px'} display={'flex'} alignItems={'center'} position={'relative'}>

                <CircularProgress size={300} variant='determinate' value={75} />
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
                        <Typography variant={'h1'}>75</Typography>
                        <Typography variant={'body1'}>AQI <b>Buena</b></Typography>
                    </Stack>
                </Box>
            </Box>

        </Box>
    )
}
