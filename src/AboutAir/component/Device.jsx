import { Box, Typography, Grid, Stack, Stepper, MobileStepper, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { AnimatePresence, motion } from 'framer-motion'

import device1 from '../../assets/DeviceImages/device1.png'
import device2 from '../../assets/DeviceImages/device2.png'
import device3 from '../../assets/DeviceImages/device3.png'
import device4 from '../../assets/DeviceImages/device4.png'
import device5 from '../../assets/DeviceImages/device5.png'

const text1 = 'En la actualidad, el Instituto ha desarrollado un prototipo de Dispositivo de Bajo Costo (DBC) diseñado para medir las partículas de 10 y 2.5 micras en el interior de viviendas. Este dispositivo permitirá llevar a cabo un seguimiento de la calidad del aire en los hogares y establecer conexiones con los síntomas respiratorios de los residentes. Esta etapa inicial representa el primer paso en su enfoque para abordar este problema de salud pública.'

export const Device = () => {

    const deviceImages = [
        {
            id: 1,
            src: device1
        },
        {
            id: 2,
            src: device2
        },
        {
            id: 3,
            src: device3
        },
        {
            id: 4,
            src: device4
        },
        {
            id: 5,
            src: device5
        }
    ]

    return (
        <Box p={5}>
            <Grid container spacing={2} display={'flex'} alignItems={'center'} my={'auto'} component={motion.div} transition={{delay: 0.4}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Grid item xs={12} md={6} >
                    <Stack direction={'column'} gap={3} component={motion.div} initial={{ y: '100%' }} animate={{ y: 0 }} transition={{delay: 0.45}}>
                        <Typography variant="h4" color="primary.dark"><b>Conoce nuestro dispositivo</b></Typography>
                        <Typography variant="body1" color="initial" textAlign={'justify'}>{text1}</Typography>
                    </Stack>

                </Grid>
                <Grid item xs={12} md={6}>
                    <DeviceImages deviceImages={deviceImages} />
                </Grid>
            </Grid>

        </Box>
    )
}

const DeviceImages = ({ deviceImages }) => {

    const [keyActive, setKeyActive] = useState(0)
    const [goingleft, setGoingleft] = useState(false)

    useEffect(() => {

        const interval = setInterval(() => {
            if (keyActive === 4) {
                setKeyActive(0)
            } else {
                setGoingleft(true)
                setKeyActive(keyActive + 1)
            }
        }, 2000)

        return () => clearInterval(interval)

    })
    const handleNext = (e) => {
        if (keyActive === 4) {
            setGoingleft(true)
            setKeyActive(0)
        } else {
            setGoingleft(true)
            setKeyActive(keyActive + 1)
        }
    }

    const handleBack = (e) => {
        if (keyActive === 0) {
            setKeyActive(4)
            setGoingleft(false)
        } else {
            setGoingleft(false)
            setKeyActive(keyActive - 1)
        }
    }

    return (
        <Box justifyContent={'center'} sx={{ overflowX: 'hidden' }}>

            <Box height={300} position={'relative'} display={'flex'} alignItems={'center'}>
                <IconButton onClick={handleNext} sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, margin: 'auto', height: '50px', zIndex: 2 }}><ArrowForwardIosIcon /></IconButton>
                <IconButton onClick={handleBack} sx={{ position: 'absolute', left: 0, margin: 'auto', height: '50px', zIndex: 2 }}><ArrowBackIosNewIcon /></IconButton>
                <AnimatePresence>
                    {keyActive === 1 && (<motion.img key={deviceImages[keyActive].id} src={deviceImages[keyActive].src} style={{ height: '200px', objectFit: 'contain', position: 'absolute', margin: 'auto', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} initial={{ x: goingleft ? '200%' : '-200%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: goingleft ? '-200%' : '200%', opacity: 0 }}></motion.img>)}
                    {keyActive === 0 && (<motion.img key={deviceImages[keyActive].id} src={deviceImages[keyActive].src} style={{ height: '200px', objectFit: 'contain', position: 'absolute', margin: 'auto', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} initial={{ x: goingleft ? '200%' : '-200%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: goingleft ? '-200%' : '200%', opacity: 0 }}></motion.img>)}
                    {keyActive === 2 && (<motion.img key={deviceImages[keyActive].id} src={deviceImages[keyActive].src} style={{ height: '200px', objectFit: 'contain', position: 'absolute', margin: 'auto', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} initial={{ x: goingleft ? '200%' : '-200%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: goingleft ? '-200%' : '200%', opacity: 0 }}></motion.img>)}
                    {keyActive === 3 && (<motion.img key={deviceImages[keyActive].id} src={deviceImages[keyActive].src} style={{ height: '200px', objectFit: 'contain', position: 'absolute', margin: 'auto', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} initial={{ x: goingleft ? '200%' : '-200%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: goingleft ? '-200%' : '200%', opacity: 0 }}></motion.img>)}
                    {keyActive === 4 && (<motion.img key={deviceImages[keyActive].id} src={deviceImages[keyActive].src} style={{ height: '200px', objectFit: 'contain', position: 'absolute', margin: 'auto', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} initial={{ x: goingleft ? '200%' : '-200%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: goingleft ? '-200%' : '200%', opacity: 0 }}></motion.img>)}
                </AnimatePresence>
            </Box>

        </Box >
    )
}
