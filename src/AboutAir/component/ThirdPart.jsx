import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

import cota from '../../assets/images/cota.png'
import bogota from '../../assets/images/bogota.png'
import medellin from '../../assets/images/medellin.png'

import fondo03 from '../../assets/images/fondo03.png'

import { motion } from 'framer-motion'

export const ThirdPart = () => {

    const [inViewBackGround, setinViewBackGround] = useState(false)

    return (
        <Box position={'relative'} zIndex={0}>
            <Box src={fondo03} sx={{
                width: "150%",
                height: 500,
                position: "absolute",
                bottom: "0",
                left: "-25%",
                opacity: "40%",
            }} zIndex={1}

            />

            <Box position={'relative'} zIndex={2}>
                <Typography variant={'h4'} align={'center'} color={'primary.dark'} ><b>¿Conoces las ciudades mas contaminadas por PM?</b></Typography>
                <Divider variant='middle' />

                <Grid container spacing={2} display={'flex'} alignItems={'center'} my={'auto'}>

                    <Grid item xs={12} md={3} display={'flex'} height={'50vh'} justifyContent={'center'} alignItems={'center'} p={5}>
                        <Box component={Paper} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Box component={'img'} src={medellin} sx={{
                                width: '90%',
                                height: 'object-fit',
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} display={'flex'} height={'50vh'} justifyContent={'center'} alignItems={'center'} p={5}>
                        <Box component={Paper} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Box component={'img'} src={cota} sx={{
                                width: 'object-fit',
                                height: '100%',
                            }} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3} display={'flex'} height={'50vh'} justifyContent={'center'} alignItems={'center'} p={5}>
                        <Box component={Paper} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Box component={'img'} src={bogota} sx={{
                                width: '90%',
                                height: 'object-fit',
                            }} />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box >
    )
}
