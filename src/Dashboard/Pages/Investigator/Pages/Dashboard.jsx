import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { Map } from '../Components/Map/Map'
import { DashBox } from '../Components/DashBox'
import { DevicesList } from '../Components/Table/DevicesList'
import { TitleBox } from '../Components/TitleBox'
import { BarChart } from '../Components/Chart/BarChart'
import { GroupMeasures } from '../Components/Measures/GroupMeasures'

import { motion } from 'framer-motion'

import './Dashboard.css'

import fnd02 from '../../../../assets/images/fondo03.png'

export const Dashboard = () => {
    return (
        <>

            <Box mb={10} >
                <Box component={'img'} width={'100%'} height={800} src={fnd02} position='absolute' sx={{ top: 150, opacity: '0.3' }} zIndex={-1} />
                <Box minHeight={'100vh'} maxWidth={'100vw'} pt={10} justifyContent={'center'} display={'flex'} pb={2}>

                    <Grid container width={'99%'} spacing={4} display={'flex'}>

                        <Grid item xs={12} md={4}>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.3 } }}>
                                <DashBox height={'50vh'} width={'100%'} component={Paper} elevation={6}>
                                    <Map />
                                </DashBox>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.4 } }}>

                                <DashBox component={Paper} elevation={6} height={'50vh'} bgcolor={'primary.contrastText'} p={2}>

                                    <TitleBox title={'Devices'} />
                                    <DevicesList />

                                </DashBox>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.4 } }}>

                                <DashBox component={Paper} elevation={6} height={'50vh'} bgcolor={'primary.contrastText'} p={2}>
                                    <TitleBox title={'Medición'} />
                                    <BarChart />
                                </DashBox>
                            </motion.div>

                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>

                            <GroupMeasures />

                        </Grid>

                    </Grid>

                </Box>

            </Box>
        </>
    )
}
