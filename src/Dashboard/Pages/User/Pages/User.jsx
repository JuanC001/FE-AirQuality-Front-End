import { Box, Grid } from '@mui/material'
import React from 'react'

import fondo03 from '../../../../assets/images/fondo03.png'
import { GroupMeasures } from '../components/GroupMeasures'

export const User = () => {
    return (
        <Box minHeight={'100vh'} mt={{ xs: 9, md: 10 }} mb={3} position={'relative'}>
            <Box component={'img'} src={fondo03} position={'absolute'} height={'500px'} width={'100%'} sx={{ top: '25%' }} zIndex={-1} />
            <Grid container height={'100%'} px={4} spacing={1}>
                <Grid height={'50vh'} item xs={12} md={6}>
                    <GroupMeasures />
                </Grid>

                <Grid height={'50vh'} item xs={12} md={6}>


                </Grid>

                <Grid height={'50vh'} item xs={12} >
                    <Box height={'100%'} bgcolor={'black'} width={'100%'}>


                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}
