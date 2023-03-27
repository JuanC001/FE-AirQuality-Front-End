import { Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DashBox } from '../../../Components'

import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { PMChart } from './PMChart';


export const PmGroup = () => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={12} height={'50%'}>

                <DashBox component={Paper} height={242} >

                    <Box my={1} height={'25%'} >
                        <Typography variant="h4" color="initial" mb={1}><BubbleChartIcon /> <strong>PM 2.5</strong></Typography>
                        <Divider variant='middle' />
                    </Box>

                    <Box height={'75%'} >

                        <PMChart particle={'pm25'}/>

                    </Box>

                </DashBox>

            </Grid>

            <Grid item xs={12} height={'50%'}>
                <DashBox component={Paper} height={242} >

                    <Box my={1} height={'25%'} >
                        <Typography variant="h4" color="initial" mb={1}><WorkspacesIcon /> <strong>PM 10</strong></Typography>
                        <Divider variant='middle' />
                    </Box>

                    <Box height={'75%'} >

                        <PMChart particle={'pm10'}/>

                    </Box>

                </DashBox>
            </Grid>

        </Grid>
    )
}
