import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

import iqair from "../../assets/images/iqair.jpeg";

import { motion } from 'framer-motion'

import cota from '../../assets/images/cota.png'
import bogota from '../../assets/images/bogota.png'
import medellin from '../../assets/images/medellin.png'

export const AboutPM = () => {
    return (
        <Box bgcolor={'primary.light'} minHeight={'70vh'} px={4} my={2}>

            <Grid container >

                <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} p={{ xs: 2, sm: 10 }}>
                    <Box component={'img'} src={iqair} width={'100%'} />
                </Grid>

                <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'}>
                    <Grid container rowGap={3}>
                        <Grid item>
                            <Typography variant={'h4'} color={'primary.dark'} textAlign={'center'}><b>¿Sabías Que?</b></Typography>
                            <Typography variant='body1' mt={2} textAlign={'justify'}>Según el informe de Calidad del Aire de IQAir en 2022, en lo que respecta al material particulado de 2.5 micrómetros (PM2.5), Colombia se encuentra en la posición número 63 a nivel mundial.</Typography>
                        </Grid>
                        <Grid item>

                            <Typography variant={'h4'} color={'primary.dark'} textAlign={'center'}><b>Las ciudades mas contaminadas por PM son:</b></Typography>

                            <Stack gap={2} mt={2}>
                                <Paper>
                                    <Grid container display={'flex'} alignItems={'center'}>

                                        <Grid item xs={8}>
                                            <Typography variant={'h6'} color={'secondary.dark'} textAlign={'center'}><b>Medellín</b></Typography>
                                        </Grid>

                                        <Grid item xs={2}>

                                            <Box component={'img'} src={medellin} sx={{
                                                width: '90%',
                                                height: 'object-fit',
                                            }} />
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper>
                                    <Grid container display={'flex'} alignItems={'center'}>

                                        <Grid item xs={8}>
                                            <Typography variant={'h6'} color={'secondary.dark'} textAlign={'center'}><b>Cota</b></Typography>
                                        </Grid>

                                        <Grid item xs={2}>
                                            <Box component={motion.img} src={cota} sx={{
                                                width: '90%',
                                                height: 'object-fit',
                                            }} />
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper>
                                    <Grid container display={'flex'} alignItems={'center'}>

                                        <Grid item xs={8}>
                                            <Typography variant={'h6'} color={'secondary.dark'} textAlign={'center'}><b>Bogotá</b></Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Box component={motion.img} src={bogota} sx={{
                                                width: '90%',
                                                height: 'object-fit',
                                            }} />
                                        </Grid>

                                    </Grid>
                                </Paper>
                            </Stack>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </Box>
    )
}
