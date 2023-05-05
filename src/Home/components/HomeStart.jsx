import { Box, Button, Fade, Grid, IconButton, Slide, Stack, Typography, useScrollTrigger, useTheme } from '@mui/material'
import React from 'react'
import { ImgBox } from './ImgBox'

import { scrollDownTo } from '../hooks/scrollDownTo'
import dotmap from '../../assets/images/dotmap.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './HomeStart.css'
import { AirParticles } from './Particles/AirParticles'


function ArrowDown(props) {

    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Fade in={!trigger} appear={false}>

            {children}

        </Fade>
    )

}

export const HomeStart = () => {

    return (
        <>
            <Box mt={9} minHeight={'100vh'}>
                <AirParticles />
                <Grid container>
                    <Grid item xs={12} md={6} display={'flex'}>
                        <Slide direction={'right'} in={true}>
                            <Box p={5} display={'flex'}>

                                <Box margin={'auto'} my={'auto'} sx={{ transition: 'all 0.2s ease-in-out', ':hover': { transform: 'translateY(5px)', filter: 'drop-shadow(10px 10px 5px lightgrey)' } }}>
                                    <Stack m={'auto'}>
                                        <Typography variant='h3' align='center' color={'primary.main'} mb={2}><strong>Conozcamos nuestro aire</strong></Typography>
                                        <Typography variant='p' align='justify'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                                            sint vero quo voluptas adipisci possimus libero! Enim, consectetur
                                            praesentium molestias earum provident minus eaque voluptatibus assumenda
                                            natus deleniti, facilis voluptates.
                                        </Typography>
                                        <Box textAlign={'end'} p={3}>
                                            <Button variant='outlined' color='primary' size='large' onClick={e => scrollDownTo('about-us')}>Conocer mas</Button>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Slide direction={'left'} in={true}>

                            <Box textAlign={'center'}>
                                <ImgBox margin={'auto'} mt={3} component={'img'} src={dotmap} className={'img-dot'} sx={{
                                    ":hover": {

                                        filter: 'invert(0.5) sepia(1) hue-rotate(10deg) saturate(1000%) drop-shadow(10px 10px 2px lightgrey)'

                                    }
                                }} />
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} mb={16}>
                        <Slide direction={'up'} in={true}>

                            <Box>
                                <Box textAlign={'center'} sx={{ transition: 'all 0.2s ease-in-out', ':hover': { transform: 'translateY(5px)', filter: 'drop-shadow(10px 10px 10px lightgrey)' } }}>

                                    <Box p={4} textAlign={'center'}>
                                        <Typography variant='h4' align='center' color={'primary.main'} mb={2}><strong>Obten beneficios y ventajas</strong></Typography>
                                        <Typography variant='p' align='center' > Manten el control de calidad de aire en tu casa.</Typography>

                                    </Box>
                                    <ArrowDown>
                                        <IconButton aria-label="scroll down" onClick={() => scrollDownTo('about-us')}>
                                            <KeyboardArrowDownIcon />
                                        </IconButton>
                                    </ArrowDown>

                                </Box>
                            </Box>
                        </Slide>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
