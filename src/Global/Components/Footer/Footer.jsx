import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

import logo from '../../../assets/images/Logo_de_la_Universidad_El_Bosque.svg.png'
import './Footer.css'

export const Footer = () => {
  return (
    <Box width={'100%'} minHeight={'30vh'} bgcolor={'secondary.main'}>

      <Grid container spacing={1} textAlign={'center'} p={4} height={'100%'} pt={3}>

        <Grid item xs={12} md={3} height={'100%'}>

          <Stack gap={3} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box height={'200px'}>

              <Box className='imgLogo' component={'img'} src={logo} height={'100%'}/>

            </Box>

          </Stack>


        </Grid>

        <Grid item xs={6} md={3}>

          <Typography variant="h6" color="primary.contrastText" textAlign={'justify'}>Calidad del Aire</Typography>
          <Divider variant='middle' color='white' />
          <Stack gap={2} mt={3}>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} md={3}>

          <Typography variant="h6" color="primary.contrastText" textAlign={'justify'}>Sensor</Typography>
          <Divider variant='middle' color='white' />
          <Stack gap={2} mt={3}>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
          </Stack>

        </Grid>

        <Grid item xs={12} md={3}>

          <Typography variant="h6" color="primary.contrastText" textAlign={'justify'}>Quienes Somos</Typography>
          <Divider variant='middle' color='white' />

          <Stack gap={2} mt={3}>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
            <Typography variant="body1" color="primary.contrastText" textAlign={'justify'}>Enlace</Typography>
          </Stack>

        </Grid>

      </Grid>

    </Box>
  )
}
