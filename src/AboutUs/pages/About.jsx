import { Box, CssBaseline, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { ContactUs } from '../components/ContactUs'
import { CardVM } from '../components/CardVM'
import { V_M } from '../components/V_M'


import { Who } from '../components/Who'
import { VisionMision } from '../components/VisionMision'
import { OurTeam } from '../components/OurTeam'

export const About = () => {


  return (
    <>
      
        <CssBaseline />
        <Box pt={10}>

          <Box minHeight={'50vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
            <Who />
          </Box>

          <Box display={'flex'} minHeight={'50vh'} mb={5}>

            <Box component={Paper} elevation={0} height={'100%'} zIndex={'10'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
              <VisionMision />
            </Box>

          </Box>

          <OurTeam />

          <ContactUs />

        </Box>

    </>
  )
}
