import { Box, CssBaseline, Grid, Typography } from '@mui/material'

import { HomeStart } from '../components/HomeStart'
import { AirControl } from '../components/AirControl'
import { Footer } from '../components/Footer/Footer'

export const Home = () => {

  return (
    <>
      <CssBaseline />
      <Box mt={'5vh'} component={'main'} bgcolor={'inherit'} height={'93vh'}>

        <Grid container alignItems={'center'}>

          <Grid item xs={12}>
            <HomeStart />
          </Grid>

          <Grid item xs={12}>

            <AirControl />

          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>

        </Grid>

      </Box>

    </>
  )
}
