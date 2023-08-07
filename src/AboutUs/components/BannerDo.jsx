import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardVM } from './CardVM'

export const BannerDo = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pb={5} bgcolor={'secondary.light'}>

      <Stack px={3} justifyContent={'center'} alignItems={'center'}>

        <Stack divider={<Divider variant='middle' />} display={'flex'} alignItems={'center'} my={2}>
          <Typography variant="h2" color="primary.dark" textAlign={'center'} my={2}><strong>Lo que hacemos</strong></Typography>
          <Typography variant="body1" color="initial" textAlign={'center'} my={2} width={'80%'}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima praesentium quia vel eos architecto id excepturi, quod aliquid dolorem. </Typography>
        </Stack>

        <Grid container spacing={4}>

<<<<<<< Updated upstream:src/AboutUs/components/BannerDo.jsx
          <Grid item xs={6} md={4}>
            <CardVM component={Paper} elevation={12} p={1}>
=======
        <Grid container spacing={4} mt={2}>

          <Grid item xs={12} sm={6} md={4} minHeight={'30vh'} display={'flex'} justifyContent={'center'}>
            <CardVM component={Paper} elevation={12} p={1} width={'90%'}>
>>>>>>> Stashed changes:src/Home/components/BannerDo.jsx

              <Typography variant="h6" color="primary.main" textAlign={'center'}>Salud Ambiental</Typography>
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur modi omnis nisi eveniet iure nulla, quibusdam nobis magni alias.
              </Typography>

            </CardVM>
          </Grid>

<<<<<<< Updated upstream:src/AboutUs/components/BannerDo.jsx
          <Grid item xs={6} md={4}>
            <CardVM component={Paper} elevation={12} p={1}>
=======
          <Grid item xs={12} sm={6} md={4} minHeight={'30vh'} display={'flex'} justifyContent={'center'}>
            <CardVM component={Paper} elevation={12} p={1} width={'90%'}>
>>>>>>> Stashed changes:src/Home/components/BannerDo.jsx

              <Typography variant="h6" color="primary.main" textAlign={'center'}>Economia Circular</Typography>
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur modi omnis nisi eveniet iure nulla, quibusdam nobis magni alias.
              </Typography>

            </CardVM>
          </Grid>

<<<<<<< Updated upstream:src/AboutUs/components/BannerDo.jsx
          <Grid item xs={12} md={4}>
            <CardVM component={Paper} elevation={12} p={1}>
              <Typography variant="h6" color="initial" textAlign={'center'}>Conciencia Social</Typography>
=======
          <Grid item xs={12} md={4} minHeight={'30vh'} display={'flex'} justifyContent={'center'}>
            <CardVM component={Paper} elevation={12} p={1} width={'90%'}>
              <Typography variant="h6" color="primary.main" textAlign={'center'}>Conciencia Social</Typography>
>>>>>>> Stashed changes:src/Home/components/BannerDo.jsx
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur modi omnis nisi eveniet iure nulla, quibusdam nobis magni alias.
              </Typography>
            </CardVM>
          </Grid>

        </Grid>
      </Stack>

    </Box>
  )
}
