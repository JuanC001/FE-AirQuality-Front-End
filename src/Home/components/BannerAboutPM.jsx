import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'

const Text1 = {
    title: '¿Quienes son los mas afectados?',
    text: 'Puede afectar Pulmones y Corazón. Algunas partículas de menos de 10 micrómetros de diámetro pueden penetrar los pulmones e ingresar al torrente sanguíneo.  Las personas con enfermedades cardíacas o pulmonares, los niños y las personas mayores pueden correr un mayor riesgo por la exposición al PM.',
}

const Text2 = {
    title: 'Posibles Afectaciones',
    text: 'Según la Agencia de Protección Ambiental de Estados Unidos, los efectos dañinos del material particulado sobre la salud de las personas y al medioambiente en general, es notable si se tiene en cuenta que inversamente proporcional al tamaño de las partículas: entre más reducidas son, más afectación generan, especialmente las menores a los 10 micrómetros de diámetro (PM 10) ya que “puede afectar tanto a los pulmones como al corazón”, siendo los niños y los adultos mayores con problemas respiratorios los más afectados. En general, la exposición a estas partículas representa un alto riesgo de salubridad “debido a que pueden llegar a la profundidad de los pulmones, y algunas hasta pueden alcanzar el torrente sanguíneo”. Múltiples estudios científicos vincularon la exposición a la contaminación por partículas a una variedad de problemas de salud, entre otros: irritación en las vías respiratorias, tos o dificultad para respirar, asma agravada y/o función pulmonar reducida, infartos de miocardio (no mortales) y latidos irregulares, e incluso, muerte prematura en personas con enfermedades pulmonares o cardíacas.',
}

export const BannerAboutPM = () => {
    return (
        <Box bgcolor={'primary.light'} minHeight={'80vh'} width={'100vw'} px={2} py={2} pb={20}>

            <Stack height={'10vh'} mb={4}>

                <Typography variant="h4" color="primary.dark" textAlign={'center'} my={'auto'} id={'about-us'}><b>Problemas de salud relacionados con el material particulado</b></Typography>

            </Stack>

            <Grid container minHeight={'100vh'}>

                <Grid item minHeight={{ xs: '50vh', md: '60vh' }} xs={12} md={6} p={1}>

                    <Box height={'100%'} component={Paper} p={2} borderRadius={'20px'}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=vdhDnYdBDhQ' width='100%' height='100%' controls={true} />
                    </Box>
                </Grid>

                <Grid item minHeight={'70vh'} xs={12} md={6} p={1}>

                    <Grid container height={'50vh'} gap={1}>

                        <Grid item height={'50%'} xs={12}>

                            <Box height={'100%'} component={Paper} p={2} borderRadius={'20px'} display={'flex'}>

                                <Stack my={'auto'} gap={3} p={2}>
                                    <Typography variant="h6" color="primary.dark" textAlign={'center'} my={'auto'}>{Text1.title}</Typography>

                                    <Divider />

                                    <Typography variant="body1" color="initial" textAlign={'justify'} my={'auto'}>
                                        {Text1.text}
                                    </Typography>
                                </Stack>

                            </Box>

                        </Grid>

                        <Grid item minHeight={'50vh'} xs={12}>

                            <Box minHeight={'50vh'} component={Paper} p={2} borderRadius={'20px'} display={'flex'}>


                                <Stack my={'auto'} gap={3} p={4}>
                                    <Typography variant="h6" color="primary.dark" textAlign={'center'} my={'auto'}>{Text2.title}</Typography>

                                    <Divider />

                                    <Typography variant="body1" color="initial" textAlign={'justify'} my={'auto'}>
                                        {Text2.text}
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
