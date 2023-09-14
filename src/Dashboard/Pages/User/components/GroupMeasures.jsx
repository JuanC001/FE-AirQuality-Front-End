import { Box, Button, Grid, Paper, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LineChart } from './LineChart'
import { TextMetrics } from './TextMetrics'
import { useDevice } from '../hooks/useDevice'


const DashBox = styled(Box)(({ theme }) => ({

    borderRadius: '10px',
    transition: 'ease 0.2s',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    ':hover': {

        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

    },

    '.active': {

        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

    }

}))

export const GroupMeasures = ({ deviceUse }) => {


    const { lastMeasures, deviceData, dataReady, activeKeys, handleChange } = useDevice()




    return (

        <Box height={'100%'} display={'flex'} alignItems={'center'}>
            <Grid container height={'100%'} py={2}>

                <Grid item xs={6} md={4} minHeight={'200px'} onClick={e => handleChange('temp')} p={1}>
                    <TextMetrics text={'Temperatura'} dataUnit='C°' data={lastMeasures.temp} dataReady={dataReady} active={activeKeys.temp} />
                </Grid>

                <Grid item xs={6} md={4} minHeight={'200px'} onClick={e => handleChange('hum')} p={1}>
                    <TextMetrics text={'Humedad'} dataUnit='%' data={lastMeasures.rh} dataReady={dataReady} active={activeKeys.hum} />
                </Grid>

                <Grid item xs={12} md={4} minHeight={'150px'} onClick={e => handleChange('pressure')} p={1}>
                    <TextMetrics text={'Presión'} dataUnit='mmHg' data={lastMeasures.pressure} dataReady={dataReady} active={activeKeys.pressure} />
                </Grid>

                <Grid item xs={12} md={6} minHeight={'200px'} onClick={e => handleChange('pm25')} p={1}>
                    <LineChart title={'PM25'} deviceData={deviceData !== null ? deviceData.measures : ''} particle={'pm25'} dataReady={dataReady} active={activeKeys.pm25} />
                </Grid>

                <Grid item xs={12} md={6} minHeight={'200px'} onClick={e => handleChange('pm10')} p={1}>
                    <LineChart title={'PM10'} deviceData={deviceData !== null ? deviceData.measures : ''} particle={'pm10'} dataReady={dataReady} active={activeKeys.pm10} />
                </Grid>

            </Grid>
        </Box>

    )
}
