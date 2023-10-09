import { Box, CssBaseline, Grid } from '@mui/material'

import { HomeStart } from '../components/HomeStart'
import { AirControl } from '../components/AirControl'
import { FirstBanner } from '../components/FirstBanner'
import { BannerAboutPM } from '../components/BannerAboutPM'

export const Home = () => {

  window.scrollTo(0, 0, { behavior: 'smooth' })

  return (
    <>
      <CssBaseline />
      <Box mt={'5vh'} component={'main'} bgcolor={'inherit'} minHeight={'100vh'} mb={1} sx={{ overflow: 'hidden' }}>

        <HomeStart />

        <FirstBanner />

        <BannerAboutPM />

        <AirControl />


      </Box >
    </>
  )
}
