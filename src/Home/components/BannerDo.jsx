import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardVM } from '../../AboutUs/components/CardVM'

export const BannerDo = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pb={5} bgcolor={'primary.light'}>

      <Stack px={3} justifyContent={'center'} alignItems={'center'}>

        <Stack divider={<Divider variant='middle' />} display={'flex'} alignItems={'center'} my={2}>
          <Typography variant="h2" color="initial" textAlign={'center'} my={2}><strong>Lo que hacemos</strong></Typography>
          <Typography variant="body1" color="initial" textAlign={'center'} my={2} width={'80%'}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima praesentium quia vel eos architecto id excepturi, quod aliquid dolorem. </Typography>
        </Stack>

        <Grid container spacing={4}>

          <Grid item xs={6} md={4}>
            <CardVM component={Paper} elevation={12} p={1}>

              <Typography variant="h6" color="initial" textAlign={'center'}>Salud Ambiental</Typography>
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur modi omnis nisi eveniet iure nulla, quibusdam nobis magni alias.
              </Typography>

            </CardVM>
          </Grid>

          <Grid item xs={6} md={4}>
            <CardVM component={Paper} elevation={12} p={1}>

              <Typography variant="h6" color="initial" textAlign={'center'}>Economia Circular</Typography>
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur modi omnis nisi eveniet iure nulla, quibusdam nobis magni alias.
              </Typography>

            </CardVM>
          </Grid>

          <Grid item xs={12} md={4}>
            <CardVM component={Paper} elevation={12} p={1}>
              <Typography variant="h6" color="initial" textAlign={'center'}>Conciencia Social</Typography>
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
