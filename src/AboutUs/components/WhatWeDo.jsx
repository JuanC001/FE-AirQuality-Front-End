import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardVM } from './CardVM'

export const WhatWeDo = () => {
    return (
        <Box>

            <Typography variant="h3" color="primary.dark" textAlign={'center'} mb={2}><strong>¿Qué hacemos?</strong></Typography>

            <Typography variant="body1" color="inherit" width={'80%'} mx={'auto'} my={3} textAlign={'center'}>Nuestras lineas de investigación son:</Typography>

            <Grid container spacing={2} justifyContent={'center'} px={5}>

                <Grid item xs={12} md={6} minHeight={'200px'}>
                    <CardVM height={'100%'} component={Paper} elevation={6} p={5}>
                        <Stack gap={2}>
                            <Typography variant="h5" color="primary.dark" textAlign={'center'}><strong>Salud Ambiental</strong></Typography>
                            <Divider />
                            <Typography variant="body1" color="inherit" textAlign={'justify'}>Bajo esta línea de investigación, el Instituto de Salud y Ambiente busca de forma interdisciplinaria realizar investigación básica y aplicada en temas de salud y su relación con el medio ambiente, para la generación de nuevo conocimiento de las diferentes problemáticas que afectan a las comunidades urbanas y rurales, así como de las posibles soluciones.
                            </Typography>
                        </Stack>
                    </CardVM>
                </Grid>

                <Grid item xs={12} md={6} minHeight={'200px'}>
                    <CardVM height={'100px'} component={Paper} elevation={6} p={5}>
                        <Stack gap={2}>
                            <Typography variant="h5" color="primary.dark" textAlign={'center'}><strong>Saneamiento Ecológico y Economía Circular</strong></Typography>
                            <Divider />
                            <Typography variant="body1" color="inherit" textAlign={'justify'}>
                                Bajo esta línea de investigación buscamos realizar investigación básica y aplicada orientada a mejorar los diferentes sistemas, tecnologías y planes de manejo de gestión integral de residuos y vertimientos, el saneamiento ecológico alternativo y/o temas relacionados con Economía Circular.
                            </Typography>
                        </Stack>
                    </CardVM>
                </Grid>

            </Grid>

        </Box>
    )
}
