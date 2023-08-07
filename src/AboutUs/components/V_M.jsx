import { SvgIcon, IconButton, Icon, Grid, Stack, Divider, Box, Typography } from '@mui/material'
import React from 'react'

export const V_M = ({ text, icon, title }) => {

  return (
    <>

      <Grid container textAlign={'center'} justifyContent={'center'} display={'flex'} rowSpacing={1} p={2}>

<<<<<<< Updated upstream
        <Grid item xs={12}>
          <Typography variant="h4" color="secondary.main"><strong>{title}</strong></Typography>
=======
        <Grid item sm={12} md={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box component={Paper} p={2} elevation={1} mx={2} width={'90%'} height={'90%'}>
            <Typography className='titleText' variant="h4" color="primary.dark"><strong>{title}</strong></Typography>
            <SvgIcon component={icon} sx={{ fontSize: '8vw' }} />
          </Box>
>>>>>>> Stashed changes
        </Grid>

        <Grid item xs={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <SvgIcon component={icon} fontSize='large'/>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="body1" color="initial">{text}</Typography>
        </Grid>
      </Grid>


    </>
  )
}
