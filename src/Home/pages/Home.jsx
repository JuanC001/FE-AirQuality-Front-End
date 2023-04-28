import { Box, CssBaseline, Grid } from '@mui/material'

import { HomeStart } from '../components/HomeStart'
import { AirControl } from '../components/AirControl'

export const Home = () => {

  return (
    <>
      <CssBaseline />
      <Box mt={'5vh'} component={'main'} bgcolor={'inherit'} minHeight={'93vh'} mb={1}>

        <HomeStart />

        <AirControl />

      </Box >

    </>
  )
}
