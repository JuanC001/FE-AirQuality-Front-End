import { SvgIcon, IconButton, Icon, Grid, Stack, Divider, Box, Typography } from '@mui/material'
import React from 'react'

export const V_M = ({ text, icon, title }) => {

  return (
    <>

      <Grid container textAlign={'center'} justifyContent={'center'} display={'flex'} rowSpacing={1} p={2}>

        <Grid item xs={12}>
          <Typography variant="h4" color="secondary.main"><strong>{title}</strong></Typography>
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
