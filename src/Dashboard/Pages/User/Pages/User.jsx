import { Box, Grid } from '@mui/material'
import React from 'react'

import fondo03 from '../../../../assets/images/fondo03.png'
import { GroupMeasures } from '../components/GroupMeasures'
import { Quality } from '../components/Quality'
import { MainChart } from '../components/MainChart'

import { useDevice } from '../hooks/useDevice'

export const User = () => {

    const { lastMeasures, deviceData, dataReady, activeKey, activeKeys, handleChange } = useDevice()

    return (
        <Box minHeight={'100vh'} mt={{ xs: 9, md: 12 }} mb={3} position={'relative'} width={'98%'} mx={'auto'}>
            <Box component={'img'} src={fondo03} position={'absolute'} height={'500px'} width={'103%'} sx={{ top: '25%', left: '-2%' }} zIndex={-1} />
            <Grid container>

                <Grid item xs={12} md={6} height={'50vh'}>

                    <Quality />

                </Grid>

                <Grid item xs={12} md={6} minHeight={'50vh'} >

                    <GroupMeasures deviceUse={{
                        lastMeasures, deviceData, dataReady, activeKeys, handleChange
                    }} />

                </Grid>

                <Grid item xs={12} height={'50vh'} mt={4}>

                    <MainChart deviceData={deviceData} dataKey={activeKey} />

                </Grid>

            </Grid>

        </Box>
    )
}
