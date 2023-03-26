import { Box, Button, Fade, Grid, IconButton, Slide, Stack, Typography, useScrollTrigger } from '@mui/material'
import React from 'react'
import { ImgBox } from './ImgBox'

import { scrollDownTo } from '../hooks/scrollDownTo'
import dotmap from '../../assets/images/dotmap.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './HomeStart.css'

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

            <Grid item xs={12} md={6}>
                <Slide direction={'right'} in={true}>
                    <Box p={5}>

                        <Box margin={'auto'} my={'auto'} alignItems={'center'} sx={{ transition: 'all 0.2s ease-in-out', ':hover': { transform: 'translateY(5px)' } }}>
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

                    <Box bgcolor={'white'} textAlign={'center'}>
                        <ImgBox margin={'auto'} mt={3} component={'img'} src={dotmap} className={'img-dot'} />
                    </Box>
                </Slide>
            </Grid>
            <Grid item xs={12} mb={16}>
                <Slide direction={'up'} in={true}>

                    <Box>
                        <Box textAlign={'center'} sx={{ transition: 'all 0.2s ease-in-out', ':hover': { transform: 'translateY(5px)' } }}>

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

        </>
    )
}
