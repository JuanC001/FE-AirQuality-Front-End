import { CssBaseline, Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DashBox } from '../../Components/'
import { DeviceList } from '../components/DeviceList'
import { Graph } from '../components/Graph'
import Map from '../components/Map'
import { MeasuresGroup } from '../components/MeasuresGroup'

export const InvestigatorDashboard = () => {
    return (
        <>
            <CssBaseline />

            <Box width={'95%'} mx={'auto'} mb={3}>
                <Grid container mt={'6vh'} spacing={3} >

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <DashBox component={Paper} elevation={3} sx={{ padding: 0 }} height={500}>
                            <Map />
                        </DashBox>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={8}>
                        <DashBox component={Paper} elevation={3} height={500}>
                            <Typography variant="h4" color="initial" mb={1}><strong>Dispositivos</strong></Typography>
                            <Divider variant='middle' />
                            <Box my={1} />
                            <DeviceList />
                        </DashBox>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <DashBox component={Paper} elevation={3} height={500}>
                            <Typography variant="h4" color="initial" mb={1}><strong>Medición</strong></Typography>
                            <Divider variant='middle' />
                            <Box my={1} />
                            <Box height={'80%'}>
                                <Graph />
                            </Box>
                        </DashBox>
                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box height={500}>
                            <MeasuresGroup />
                        </Box>
                    </Grid>

                    <Grid item xs={6} lg={1}>
                        <DashBox component={Paper} elevation={3} height={500}>
                            %
                        </DashBox>
                    </Grid>

                </Grid>
            </Box>

        </>
    )
}
