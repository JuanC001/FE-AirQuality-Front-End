import { Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DashBox } from '../../../Components'

export const PmGroup = () => {
    return (
        <Grid container spacing={1} height={'100%'}>

            <Grid item xs={12}>

                <DashBox component={Paper} height={'50%'}>
                    <Typography variant="h4" color="initial" mb={1}><strong>PM 2.5</strong></Typography>
                    <Divider variant='middle' />
                    <Box my={1} />
                </DashBox>

            </Grid>

            <Grid item xs={12}>
                <DashBox component={Paper} height={'50%'}>
                    <Typography variant="h4" color="initial" mb={1}><strong>PM 10</strong></Typography>
                    <Divider variant='middle' />
                    <Box my={1} />
                </DashBox>
            </Grid>

        </Grid>
    )
}
