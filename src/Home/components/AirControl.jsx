import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

import { ImgBox } from './ImgBox'
import { MicroBox } from './MicroBox'


import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

import placeholder from '../../assets/images/placeholder.png'
import fondo from '../../assets/images/fondo02.png'

export const AirControl = () => {

    const [animar, setAnimar] = React.useState(false)

    const wrapperVariants = {
        initial: {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            transition: { duration: 1 }
        },
        animate: {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: { duration: 2, delay: 0.5 }
        },
    }

    return (
        <Box position={'relative'} zIndex={1} bgcolor={'primary.light'}>
            <Grid container alignItems={'center'} pt={4} pb={4} zIndex={2}>
                <Grid item xs={12} md={6}>

                    <Box p={4} id={'about-us'}>
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
                                    <OpacityIcon />
                                    <Typography variant="h6" textAlign={'center'}>
                                        60%
                                    </Typography>
                                </Stack>

                            </MicroBox>
                        </Grid>

                        <Grid item xs={5} md={3}>
                            <MicroBox display={'flex'} mx={'auto'}>

                                <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                    <ThermostatIcon />
                                    <Typography variant="h6" textAlign={'center'}>
                                        18°
                                    </Typography>
                                </Stack>

                            </MicroBox>
                        </Grid>

                        <Grid item xs={5} md={3}>
                            <MicroBox display={'flex'} mx={'auto'}>

                                <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                    <ThermostatIcon />
                                    <Typography variant="h6" textAlign={'center'}>
                                        30°
                                    </Typography>
                                </Stack>

                            </MicroBox>
                        </Grid>

                        <Grid item xs={7.5} md={3}>
                            <MicroBox display={'flex'} mx={'auto'}>

                                <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                    <Typography variant="body1" textAlign={'center'}>ppm</Typography>
                                    <Typography variant="h6" textAlign={'center'}>
                                        28
                                    </Typography>
                                    <Typography variant="body1" textAlign={'center'}><strong>PM2.5</strong></Typography>
                                </Stack>

                            </MicroBox>
                        </Grid>

                        <Grid item xs={7.5} md={3}>
                            <MicroBox display={'flex'} mx={'auto'}>

                                <Stack direction={'column'} m={'auto'} alignItems={'center'}>
                                    <Typography variant="body1" textAlign={'center'}>ppm</Typography>

                                    <Typography variant="h6" textAlign={'center'}>
                                        27
                                    </Typography>
                                    <Typography variant="body1" textAlign={'center'}><strong>PM10</strong></Typography>
                                </Stack>

                            </MicroBox>
                        </Grid>



                    </Grid>

                </Grid>

                <Grid item xs={12} md={6} textAlign={'center'}>
                    <ImgBox margin={'auto'} mt={3} component={'img'} src={placeholder} sx={{ maxWidth: '80%', opacity: '50%' }} />
                </Grid>

            </Grid>
            <Box component={motion.img} src={fondo} sx={{ width: '100%', height: 500, position: 'absolute', bottom: '0', opacity: '40%' }} zIndex={-1} variants={wrapperVariants} initial={'initial'} animate={animar && 'animate'} viewport={{ once: true }} onVie />
            <motion.div onViewportEnter={e => setAnimar(true)} />
        </Box>
    )
}
