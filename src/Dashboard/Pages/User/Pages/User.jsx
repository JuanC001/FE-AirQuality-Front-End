import { Box, Grid } from '@mui/material'
import React from 'react'

import fondo03 from '../../../../assets/images/fondo03.png'
import { GroupMeasures } from '../components/GroupMeasures'
import { Quality } from '../components/Quality'
import { MainChart } from '../components/MainChart'

export const User = () => {
    return (
        <Box minHeight={'100vh'} mt={{ xs: 9, md: 12 }} mb={3} position={'relative'}>
            <Box component={'img'} src={fondo03} position={'absolute'} height={'500px'} width={'100%'} sx={{ top: '25%' }} zIndex={-1} />
            <Grid container>

                <Grid item xs={12} md={6} height={'50vh'}>

                    <Quality />

                </Grid>

                <Grid item xs={12} md={6} minHeight={'50vh'} >

                    <GroupMeasures />

                </Grid>



                <Grid item xs={12} minHeight={'50vh'}>

                    <MainChart />

                </Grid>

            </Grid>

        </Box>
    )
}
