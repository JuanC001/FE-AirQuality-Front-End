import { Box, CssBaseline, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { BannerDo } from '../components/BannerDo'
import { ContactUs } from '../components/ContactUs'
import { CardVM } from '../components/CardVM'
import { V_M } from '../components/V_M'

import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Who } from '../components/Who'

export const About = () => {

  const vision = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut saepe iste officiis maxime quae consequuntur nemo nobis delectus veniam magni iure deserunt deleniti, eius cupiditate tempora officia ullam rerum. Dicta.'
  const mision = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut saepe iste officiis maxime quae consequuntur nemo nobis delectus veniam magni iure deserunt deleniti, eius cupiditate tempora officia ullam rerum. Dicta.'

  return (
    <>

      <CssBaseline />
      <Box minHeight={'100vh'} pt={10}>

        <Who />

        <BannerDo />
        <Box px={3}>
          <Grid container columnSpacing={3} rowSpacing={3}>

            <Grid item xs={12} md={6}>
              <CardVM component={Paper} elevation={12} display={'flex'} justifyContent={'center'}>
                <V_M text={vision} icon={VisibilityIcon} title={'Visión'}/>
              </CardVM>
            </Grid>

            <Grid item xs={12} md={6}>
              <CardVM component={Paper} elevation={12} display={'flex'} justifyContent={'center'}>
                <V_M text={mision} icon={TrendingUpIcon} title={'Misión'}/>
              </CardVM>
            </Grid>

          </Grid>
        </Box>

        <ContactUs />

      </Box>

    </>
  )
}
