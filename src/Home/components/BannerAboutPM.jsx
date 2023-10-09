import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'

export const BannerAboutPM = () => {
    return (
        <Box bgcolor={'primary.light'} minHeight={'80vh'} width={'100vw'} px={5} py={2} >

            <Stack height={'10%'} mb={4}>

                <Typography variant="h4" color="primary.dark" textAlign={'center'} my={'auto'} id={'about-us'}><b>Problemas de salud relacionados con el material particulado</b></Typography>

            </Stack>

            <Grid container height={'100%'}>

                <Grid item height={{ xs: '50vh', md: '70vh' }} xs={12} md={6} p={1}>
                    <Box height={'100%'} component={Paper} p={2} borderRadius={'20px'}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=vdhDnYdBDhQ' width='100%' height='100%' controls={true} />
                    </Box>
                </Grid>

                <Grid item height={'700px'} xs={12} md={6} p={1}>

                    <Grid container height={'100%'} gap={1}>

                        <Grid item height={'50%'} xs={12}>

                            <Box height={'100%'} component={Paper} p={2} borderRadius={'20px'} display={'flex'}>

                                <Stack my={'auto'} gap={3} p={4}>
                                    <Typography variant="h6" color="primary.dark" textAlign={'center'} my={'auto'}>¿Quienes son los mas afectados?</Typography>

                                    <Divider />

                                    <Typography variant="body1" color="initial" textAlign={'justify'} my={'auto'}>
                                        Puede afectar Pulmones y Corazón. Algunas partículas de menos de 10 micrómetros de diámetro pueden penetrar los pulmones e ingresar al torrente sanguíneo.  Las personas con enfermedades cardíacas o pulmonares, los niños y las personas mayores pueden correr un mayor riesgo por la exposición al PM.
                                    </Typography>
                                </Stack>

                            </Box>

                        </Grid>

                        <Grid item height={'40%'} xs={12}>

                            <Box height={'100%'} component={Paper} p={2} borderRadius={'20px'}>
                                <Stack my={'auto'} gap={3} p={4}>
                                    <Typography variant="h6" color="primary.dark" textAlign={'center'} my={'auto'}>Posibles Afectaciones</Typography>

                                    <Divider />

                                    <Typography variant="body1" color="initial" textAlign={'justify'} my={'auto'}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure quos veniam illo quo delectus suscipit? Voluptas nam excepturi temporibus obcaecati sed, a modi ipsum architecto explicabo quos quam labore.
                                    </Typography>
                                </Stack>
                            </Box>

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        </Box>
    )
}
