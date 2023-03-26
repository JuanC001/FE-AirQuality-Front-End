import { Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DashBox } from '../../../Components'

export const MGroup = () => {
    return (
        <>

            <Grid container spacing={1} height={'100%'}>

                <Grid item xs={12}>

                    <DashBox component={Paper} height={'33,33%'}>
                        <Typography variant="h4" color="initial" mb={1}><strong>Presion Atmosferica</strong></Typography>
                        <Divider variant='middle' />
                        <Box my={1} />
                    </DashBox>

                </Grid>

                <Grid item xs={12}>
                    <DashBox component={Paper} height={'33,33%'}>
                        <Typography variant="h4" color="initial" mb={1}><strong>Temperatura</strong></Typography>
                        <Divider variant='middle' />
                        <Box my={1} />
                    </DashBox>
                </Grid>

                <Grid item xs={12}>
                    <DashBox component={Paper} height={'33,33%'}>
                        <Typography variant="h4" color="initial" mb={1}><strong>Humedad</strong></Typography>
                        <Divider variant='middle' />
                        <Box my={1} />
                    </DashBox>
                </Grid>

            </Grid>

        </>
    )
}
