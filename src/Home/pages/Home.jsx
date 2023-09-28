import { Box, CssBaseline, Grid } from '@mui/material'

import { HomeStart } from '../components/HomeStart'
import { AirControl } from '../components/AirControl'
import { BannerDo } from '../components/BannerDo'
import { FirstBanner } from '../components/FirstBanner'

export const Home = () => {

  window.scrollTo(0, 0, { behavior: 'smooth' })

  return (
    <>
      <CssBaseline />
      <Box mt={'5vh'} component={'main'} bgcolor={'inherit'} minHeight={'100vh'} mb={1} sx={{ overflow: 'hidden' }}>

        <HomeStart />

        <FirstBanner />

        <AirControl />

        <BannerDo />
      </Box >
    </>
  )
}
