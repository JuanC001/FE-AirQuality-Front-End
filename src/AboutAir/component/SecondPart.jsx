import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import img01 from '../../assets/images/device_diagram.png'

const text1 = 'El Dispositivo de Bajo Costo (DBC) se instala en cada hogar y se conecta a la red local. Cada tres minutos, envía datos sobre los niveles de material particulado a un servidor en la nube. Tanto los investigadores como los participantes pueden acceder a esta información en tiempo real. Además, de manera semanal, los participantes completan un breve cuestionario sobre sus síntomas respiratorios a través de canales como WhatsApp y correo electrónico.'

export const SecondPart = () => {
    return (
        <Box bgcolor={'secondary.light'} p={5}>
            <Grid container spacing={2} display={'flex'} alignItems={'center'} my={'auto'}>
                <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Box width={'100%'} component={'img'} src={img01} sx={{
                        width: {
                            xs: '100%',
                            md: '600px'
                        },
                        height: {
                            xs: '100%',
                            md: '400px'
                        },
                    }}></Box>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant='body1' textAlign={'justify'} width={'80%'}>{text1}</Typography>
                </Grid>
            </Grid>
        </Box >
    )
}
