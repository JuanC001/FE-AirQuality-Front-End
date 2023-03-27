import { Grid, Paper } from '@mui/material'
import React from 'react'
import { MGroup } from './MeasureGroups/MGroup'
import { PmGroup } from './MeasureGroups/PmGroup'

export const MeasuresGroup = () => {
    return (
        <>

            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <PmGroup />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <MGroup />
                </Grid>

            </Grid>


        </>
    )
}
