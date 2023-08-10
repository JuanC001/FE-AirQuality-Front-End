import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardVM } from '../../AboutUs/components/CardVM'

export const BannerDo = () => {
  return (
    <Box pb={5} bgcolor={'primary.light'} minHeight={'60vh'} display={'flex'}>

      <Box width={'90%'} mx={'auto'} mb={5}>

        <Stack divider={<Divider variant='middle' />} display={'flex'} alignItems={'center'} my={2}>
          <Typography variant="h2" color="primary.dark" textAlign={'center'} my={2}><strong>Lo que hacemos</strong></Typography>
          <Typography variant="body1" color="initial" textAlign={'center'} my={2} width={'80%'}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima praesentium quia vel eos architecto id excepturi, quod aliquid dolorem. </Typography>
        </Stack>

        <Divider variant='middle' orientation='horizontal' />

        <Grid container spacing={4} mt={2}>

          <Grid item xs={12} sm={6} md={4} minHeight={'30vh'} display={'flex'}>
            <CardVM component={Paper} elevation={12} p={1}>

              <Typography variant="h6" color="primary.main" textAlign={'center'}>Salud Ambiental</Typography>
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial" textAlign={'justify'} p={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, reprehenderit neque? Quasi aspernatur maxime ad! Molestiae dolore nemo tempore accusantium velit suscipit. Ratione quisquam libero laudantium magnam harum, obcaecati deleniti itaque labore necessitatibus officiis repellat officia minus esse nobis rem.
              </Typography>

            </CardVM>
          </Grid>

          <Grid item xs={12} sm={6} md={4} minHeight={'30vh'} display={'flex'}>
            <CardVM component={Paper} elevation={12} p={1} >

              <Typography variant="h6" color="primary.main" textAlign={'center'}>Economia Circular</Typography>
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial" textAlign={'justify'} p={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, reprehenderit neque? Quasi aspernatur maxime ad! Molestiae dolore nemo tempore accusantium velit suscipit. Ratione quisquam libero laudantium magnam harum, obcaecati deleniti itaque labore necessitatibus officiis repellat officia minus esse nobis rem.
              </Typography>

            </CardVM>
          </Grid>

          <Grid item xs={12} md={4} minHeight={'30vh'} display={'flex'}>
            <CardVM component={Paper} elevation={12} p={1}>
              <Typography variant="h6" color="primary.main" textAlign={'center'}>Conciencia Social</Typography>
              <Divider variant={'middle'} />

              <Typography variant="body1" color="initial" textAlign={'justify'} p={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, reprehenderit neque? Quasi aspernatur maxime ad! Molestiae dolore nemo tempore accusantium velit suscipit. Ratione quisquam libero laudantium magnam harum, obcaecati deleniti itaque labore necessitatibus officiis repellat officia minus esse nobis rem.
              </Typography>
            </CardVM>
          </Grid>

        </Grid>
      </Box>

    </Box>
  )
}
