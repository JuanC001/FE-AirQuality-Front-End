import { Box, Button, CssBaseline, Grid, Slide, Typography, useScrollTrigger, IconButton, Fade, Stack } from '@mui/material'

import { ImgBox } from '../components'
import { Footer } from '../../Global/components'

import placeholder from '../../assets/images/placeholder.png'

import { HomeStart } from '../components/HomeStart'

export const Home = () => {

  return (
    <>
      <CssBaseline />
      <Box mt={'5vh'} component={'main'} bgcolor={'inherit'} height={'93vh'}>

        <Grid container alignItems={'center'}>

          <HomeStart />

          <Grid item xs={12}>
            <Grid container alignItems={'center'} bgcolor={'secondary.light'}>
              <Grid item xs={12} md={6}>

                <Box p={4} id={'about-us'}>
                  <Typography variant='h4' align='left' color={'secondary.contrastText'} mb={2}><strong>Manten el control del aire en tu hogar</strong></Typography>
                  <Typography variant='h6' align='justify' color={'secondary.contrastText'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, delectus eveniet reprehenderit
                    quisquam adipisci eligendi ipsam unde repellendus, nostrum cupiditate veritatis quae blanditiis
                    placeat animi sunt suscipit voluptatibus, impedit rem debitis reiciendis odio officiis quidem
                    saepe! Voluptate inventore veritatis iusto! Quae quasi aliquid quod consequuntur ullam ipsa voluptas
                    blanditiis excepturi dolores! Eius, consequatur odio inventore doloremque neque a est sed.</Typography>
                </Box>

              </Grid>

              <Grid item xs={12} md={6} textAlign={'center'}>
                <ImgBox margin={'auto'} mt={3} component={'img'} src={placeholder} sx={{ maxWidth: '80%' }} />
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>

        </Grid>

      </Box>

    </>
  )
}
