import { Grid, Paper } from '@mui/material'
import React from 'react'
import { DashBox } from '../DashBox'
import { TitleBox } from '../TitleBox'

export const GroupMeasures = () => {
    return (
        <Grid container height={'100%'} spacing={3}>

            <Grid item xs={6} md={4} lg={4}>

                <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2}>

                    <TitleBox title={'PM 2.5'} />

                </DashBox>

            </Grid>

            <Grid item xs={6} md={4} lg={4}>

                <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2}>

                    <TitleBox title={'Temperatura'} />


                </DashBox>

            </Grid>

            <Grid item xs={6} md={4} lg={4}>

                <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2}>
                    <TitleBox title={'Presion Atmosferica'} />
                </DashBox>

            </Grid>

            <Grid item xs={6} md={4} lg={4}>

                <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2}>
                    <TitleBox title={'PM 10'} />
                </DashBox>

            </Grid>


            <Grid item xs={6} md={4} lg={4}>

                <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2}>
                    <TitleBox title={'Humedad'} />
                </DashBox>

            </Grid>

            <Grid item xs={6} md={4} lg={4}>

                <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2}>

                    <TitleBox title={'Calidad'} />

                </DashBox>

            </Grid>



        </Grid>
    )
}
