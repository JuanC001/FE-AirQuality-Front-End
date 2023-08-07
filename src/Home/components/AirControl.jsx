import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { ImgBox } from './ImgBox'
import placeholder from '../../assets/images/placeholder.png'
import { MicroBox } from './MicroBox'

import { motion } from 'framer-motion'

import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

import fondo02 from '../../assets/images/fondo02.png'

export const AirControl = () => {
    return (
<<<<<<< Updated upstream
        <Grid container alignItems={'center'} bgcolor={'secondary.light'}>
            <Grid item xs={12} md={6}>
=======
        <Box zIndex={-2} id={'about-us'}>
>>>>>>> Stashed changes

            <Box className={'aircontrol'} position={'relative'}>
                <Box bgcolor={'primary.light'} position={'absolute'} width={'100%'} height={'100%'} zIndex={-3} />
                <Box component={motion.img} width={'100%'} height={'100%'} src={fondo02} position={'absolute'}
                    sx={{
                        bottom: 10,
                        opacity: '30%',
                    }}
                    initial={{ clipPath: 'circle(0.4% at 0 100%)' }}
                    whileInView={{ clipPath: ['circle(140% at 0 100%)'] }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                    zIndex={-1}
                />
                <Grid container alignItems={'center'} pb={10} pt={10} zIndex={1}>
                    <Grid item xs={12} md={6}>

                        <Box p={4} zIndex={3}>
                            <Typography variant='h4' align='left' color={'primary.dark'} mb={2}><strong>Manten el control del aire en tu hogar</strong></Typography>
                            <Typography variant='h6' align='justify' color={'secondary.contrastText'}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, delectus eveniet reprehenderit
                                quisquam adipisci eligendi ipsam unde repellendus, nostrum cupiditate veritatis quae blanditiis
                                placeat animi sunt suscipit voluptatibus, impedit rem debitis reiciendis odio officiis quidem
                                saepe! Voluptate inventore veritatis iusto! Quae quasi aliquid quod consequuntur ullam ipsa voluptas
                                blanditiis excepturi dolores! Eius, consequatur odio inventore doloremque neque a est sed.</Typography>
                        </Box>

                        <Grid container columns={15} width={'98%'} spacing={2} p={'auto'} m={'auto'} justifyContent={'center'} display={'flex'}>

                            <Grid item xs={5} md={3}>
                                <MicroBox display={'flex'} mx={'auto'} textAlign={'center'}>

                                    <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                        <OpacityIcon color='primary' />
                                        <Typography variant="h6" color="primary" textAlign={'center'}>
                                            60%
                                        </Typography>
                                    </Stack>

                                </MicroBox>
                            </Grid>

                            <Grid item xs={5} md={3}>
                                <MicroBox display={'flex'} mx={'auto'}>

                                    <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                        <ThermostatIcon color='primary' />
                                        <Typography variant="h6" color="primary" textAlign={'center'}>
                                            18°
                                        </Typography>
                                    </Stack>

                                </MicroBox>
                            </Grid>

                            <Grid item xs={5} md={3}>
                                <MicroBox display={'flex'} mx={'auto'} sx={{ backgroundColor: 'primary.dark' }}>

                                    <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                        <ThermostatIcon color='primary' />
                                        <Typography variant="h6" color="primary" textAlign={'center'}>
                                            30°
                                        </Typography>
                                    </Stack>

                                </MicroBox>
                            </Grid>

                            <Grid item xs={7.5} md={3}>
                                <MicroBox display={'flex'} mx={'auto'}>

                                    <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                        <Typography variant="body1" color="primary" textAlign={'center'}>ppm</Typography>
                                        <Typography variant="h6" color="primary" textAlign={'center'}>
                                            28
                                        </Typography>
                                        <Typography variant="body1" color="primary" textAlign={'center'}><strong>PM2.5</strong></Typography>
                                    </Stack>

                                </MicroBox>
                            </Grid>

                            <Grid item xs={7.5} md={3}>
                                <MicroBox display={'flex'} mx={'auto'}>

                                    <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                        <Typography variant="body1" color="primary" textAlign={'center'}>ppm</Typography>

                                        <Typography variant="h6" color="primary" textAlign={'center'}>
                                            27
                                        </Typography>
                                        <Typography variant="body1" color="primary" textAlign={'center'}><strong>PM10</strong></Typography>
                                    </Stack>

                                </MicroBox>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={6} textAlign={'center'}>
                        <ImgBox margin={'auto'} mt={3} component={'img'} src={placeholder} sx={{ maxWidth: '80%', opacity: '50%' }} />
                    </Grid>

                </Grid>


            </Box>
        </Box>
    )
}
