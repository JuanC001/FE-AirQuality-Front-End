import { Divider, Grid, Paper, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { DashBox } from '../../../Components'

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { DashboardContext } from '../../../Context/DashboardContext';
import { useCutDec } from '../../hooks/useCutDec';

export const MGroup = () => {

    const { deviceSelected, ready } = useContext(DashboardContext)

    const theme = useTheme()

    const cutNumber = (num) => {

        return +(Math.round(num + "e+2") + "e-2");

    }

    return (
        <>

            <Grid container spacing={3}>

                <Grid item xs={12} >

                    <DashBox component={Paper} height={165}>
                        <Typography variant="h4" color="initial" mb={1}><DeviceThermostatIcon /> <strong>Temperatura</strong></Typography>
                        <Divider variant='middle' />
                        <Box my={1} />
                        {deviceSelected.measures !== undefined && <Typography variant="h4" color="initial" textAlign={'center'} sx={{ textShadow: `2px 2px 2px ${theme.palette.primary.dark}` }}><strong>{cutNumber(deviceSelected.measures[19].temp)}°</strong></Typography>}
                    </DashBox>

                </Grid>

                <Grid item xs={12} >
                    <DashBox component={Paper} height={165}>
                        <Typography variant="h4" color="initial" mb={1}><OpacityIcon /> <strong>Humedad</strong></Typography>
                        <Divider variant='middle' />
                        <Box my={1} />
                        {deviceSelected.measures !== undefined && <Typography variant="h4" color="initial" textAlign={'center'} sx={{ textShadow: `2px 2px 2px ${theme.palette.primary.dark}` }}><strong>{cutNumber(deviceSelected.measures[19].rh)}</strong></Typography>}
                    </DashBox>
                </Grid>

                <Grid item xs={12} >
                    <DashBox component={Paper} height={165}>
                        <Box my={1} height={'10%'}>
                            <Typography variant="h4" color="initial" mb={1}><ArrowCircleDownIcon /> <strong>Presión Atmosferica</strong></Typography>
                            <Divider variant='middle' />
                            {deviceSelected.measures !== undefined && <Typography variant="h4" color="initial" textAlign={'center'} sx={{ textShadow: `2px 2px 2px ${theme.palette.primary.dark}` }}><strong>{cutNumber(deviceSelected.measures[19].pressure)}</strong></Typography>}
                        </Box>

                    </DashBox>
                </Grid>

            </Grid>

        </>
    )
}
