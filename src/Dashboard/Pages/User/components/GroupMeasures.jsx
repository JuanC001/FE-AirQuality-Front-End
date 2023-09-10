import { Box, Grid, Paper, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LineChart } from './LineChart'
import { TextMetrics } from './TextMetrics'
import { useDevices } from '../../../Hooks/useDevices'


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

export const GroupMeasures = () => {

    const { getOneDevice } = useDevices()
    const [deviceData, setDeviceData] = useState(null)
    const [dataReady, setDataReady] = useState(false)
    const [lastMeasures, setLastMeasures] = useState({
        pm25: 0,
        pm10: 0,
        hum: 1,
        temp: 1,
        pres: 1
    })

    const handleDevice = async () => {

        const data = await getOneDevice('64dac03ac00bf9548e1c9311')
        setDeviceData(data)
        setLastMeasures({
            pm25: data.measures[data.measures.length - 1].pm25,
            pm10: data.measures[data.measures.length - 1].pm10,
            hum: data.measures[data.measures.length - 1].rh,
            temp: data.measures[data.measures.length - 1].temp,
            pres: data.measures[data.measures.length - 1].pressure
        })
        console.log(data)
        setDataReady(true)
    }

    useEffect(() => {

        handleDevice()

    }, [])

    return (
        <Box height={'100%'} width={'100%'}>

            <Grid container height={'100%'} spacing={2}>

                <Grid item xs={12} md={4} height={'50%'}>
                    <DashBox component={Paper} elevation={3}>
                        <TextMetrics text={'Temperatura'} dataUnit='C°' data={lastMeasures.temp} />
                    </DashBox>
                </Grid>

                <Grid item xs={12} md={4} height={'50%'}>
                    <DashBox component={Paper} elevation={3}>
                        <TextMetrics text={'Humedad'} dataUnit='%' data={lastMeasures.hum} />

                    </DashBox>

                </Grid>

                <Grid item xs={12} md={4} height={'50%'}>
                    <DashBox component={Paper} elevation={3}>
                        <TextMetrics text={'Presión'} dataUnit='mmHg' data={lastMeasures.pres} />

                    </DashBox>

                </Grid>

                <Grid item xs={12} md={6} height={'25vh'}>
                    <DashBox component={Paper} elevation={3}>
                        <LineChart title={'PM25'} deviceData={deviceData !== null ? deviceData.measures : ''} particle={'pm25'} dataReady={dataReady} />
                    </DashBox>

                </Grid>

                <Grid item xs={12} md={6} height={'25vh'}>
                    <DashBox component={Paper} elevation={3}>
                        <LineChart title={'PM10'} deviceData={deviceData !== null ? deviceData.measures : ''} particle={'pm10'} dataReady={dataReady} />
                    </DashBox>

                </Grid>

            </Grid>

        </Box>

    )
}
