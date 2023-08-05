import { Box, Button, Fade, Grid, IconButton, Slide, Stack, Typography, useScrollTrigger, useTheme } from '@mui/material'
import React from 'react'
import { ImgBox } from './ImgBox'

import { motion, useScroll, useTransform } from 'framer-motion'

import { scrollDownTo } from '../hooks/scrollDownTo'
import dotmap from '../../assets/images/mapa.png'
import fnline1 from '../../assets/images/fondo01.png'
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

    const { scrollYProgress } = useScroll()

    const left = useTransform(scrollYProgress, [0, 0.5], ["0px", "-1000px"])
    const right = useTransform(scrollYProgress, [0, 0.5], ["0px", "1000px"])
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    const variants = {
        'scale-init': {
            scale: [0, 1.1, 1.2, 1, 1],
        },
        'opacity-line': {
            opacity: [0, 0, 0, 0.5, 0.5]
        }
    }

    return (
        <>
            <Box mt={9} minHeight={'100vh'} sx={{ overflow: 'hidden' }}>
                <Grid container sx={{ overflow: 'hidden' }}>
                    <Grid item xs={12} md={6} display={'flex'}>

                        <Box p={5} display={'flex'}>

                            <Box margin={'auto'} my={'auto'} sx={{ transition: 'all 0.2s ease-in-out', ':hover': { transform: 'translateY(5px)', filter: 'drop-shadow(10px 10px 5px lightgrey)' } }}>
                                <motion.div variants={variants} animate={'scale-init'} style={{ x: left }} layout>
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
                                </motion.div>
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box textAlign={'center'}>
                            <motion.div variants={variants} animate={'scale-init'} transition={{ delay: '0.2' }} style={{ x: right }}>
                                <ImgBox margin={'auto'} mt={3} component={'img'} src={dotmap} className={'img-dot'} />
                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} mb={16}>
                        <Box>
                            <motion.div variants={variants} animate={'scale-init'} transition={{ delay: '0.4' }} style={{ y: right, opacity: opacity }}>

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
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            <Box component={motion.img} src={fnline1} sx={{ position: 'fixed', top: -200, rotate: '90deg', transform: 'scaleX(-1)', left: -150, opacity: 0.5, zIndex: -1 }} style={{ x: left }} variants={variants} animate={'opacity-line'} />
            <Box component={motion.img} src={fnline1} sx={{ position: 'fixed', top: 400, rotate: '90deg', transform: 'scaleX(-1)', right: -200, opacity: 0.5, zIndex: -1 }} style={{ y: left }} variants={variants} animate={'opacity-line'} />
        </>
    )
}
