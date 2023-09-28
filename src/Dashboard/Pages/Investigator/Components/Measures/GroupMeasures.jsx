import { Grid, Paper, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { DashBox } from '../DashBox'
import { TitleBox } from '../TitleBox'
import { LineChart } from './LineChart'
import { DashboardContext } from '../../../../Context/DashboardContext'
import { TextMeasures } from './TextMeasures'
import { Quality } from './Quality'

import { motion } from 'framer-motion'

export const GroupMeasures = () => {

    const { keyActive, DATATYPES, setKeyActive } = useContext(DashboardContext)
    window.scrollTo(0, 0, { behavior: 'smooth' })

    const theme = useTheme()

    const active = {
        borderRadius: '20px',
        transition: 'all 0.2s ease-in-out',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: '5px 10px 5px grey',
        ':hover': {

            backgroundColor: theme.palette.primary.light,
            transform: 'translateY(-10px)',
            boxShadow: `5px 10px 5px ${theme.palette.primary.main}`

        }

    }

    const particleHandler = (id) => {

        setKeyActive(id)

    }

    return (
        <Grid container height={'100%'} spacing={3}>

            <Grid item xs={6} md={4} lg={4} >
                <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0, transition: { delay: 0.5 } }}>

                    <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2} sx={keyActive === DATATYPES.pm25 ? active : {}} onClick={e => particleHandler(DATATYPES.pm25)}>

                        <TitleBox title={'PM 2.5'} />
                        <LineChart particle={'pm25'} />

                    </DashBox>
                </motion.div>
            </Grid>

            <Grid item xs={6} md={4} lg={4}>
                <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0, transition: { delay: 0.6 } }}>


                    <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2} sx={keyActive === DATATYPES.temp ? active : {}} onClick={e => particleHandler(DATATYPES.temp)}>

                        <TitleBox title={'Temperatura'} />
                        <TextMeasures particle={DATATYPES.temp} tag={'°'} />

                    </DashBox>
                </motion.div>

            </Grid>

            <Grid item xs={6} md={4} lg={4}>
                <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0, transition: { delay: 0.7 } }}>

                    <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2} sx={keyActive === DATATYPES.pressure ? active : {}} onClick={e => particleHandler(DATATYPES.pressure)}>
                        <TitleBox title={'Presion Atmosferica'} />
                        <TextMeasures particle={DATATYPES.pressure} tag={'mmHg'} />

                    </DashBox>
                </motion.div>
            </Grid>

            <Grid item xs={6} md={4} lg={4}>
                <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0, transition: { delay: 0.5 } }}>

                    <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2} sx={keyActive === DATATYPES.pm10 ? active : {}} onClick={e => particleHandler(DATATYPES.pm10)}>
                        <TitleBox title={'PM 10'} />
                        <LineChart particle={'pm10'} />
                    </DashBox>
                </motion.div>
            </Grid>


            <Grid item xs={6} md={4} lg={4}>
                <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0, transition: { delay: 0.6 } }}>
                    <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2} sx={keyActive === DATATYPES.rh ? active : {}} onClick={e => particleHandler(DATATYPES.rh)}>
                        <TitleBox title={'Humedad'} />
                        <TextMeasures particle={DATATYPES.rh} tag={'%'} />

                    </DashBox>
                </motion.div>
            </Grid>

            <Grid item xs={6} md={4} lg={4}>
                <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0, transition: { delay: 0.7 } }}>

                    <DashBox height={'23.5vh'} width={'100%'} component={Paper} elevation={6} p={2}>

                        <TitleBox title={'Calidad'} />
                        <Quality />

                    </DashBox>
                </motion.div>
            </Grid>

        </Grid>
    )
}
