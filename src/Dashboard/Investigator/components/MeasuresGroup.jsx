import { Grid, Paper } from '@mui/material'
import React from 'react'
import { MGroup } from './MeasureGroups/MGroup'
import { PmGroup } from './MeasureGroups/PmGroup'

export const MeasuresGroup = () => {
    return (
        <>

            <Grid container height={'100%'} spacing={5}>

                <Grid item xs={6}>
                    <PmGroup />
                </Grid>

                <Grid item xs={6}>
                    <MGroup />
                </Grid>

            </Grid>


        </>
    )
}
