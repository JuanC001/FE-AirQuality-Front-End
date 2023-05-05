import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { DashboardContext } from '../../../../Context/DashboardContext'
import { useTheme } from '@emotion/react'

export const TextMeasures = ({ particle, tag }) => {

    const theme = useTheme()
    const { deviceData, deviceInfo, dataReady } = useContext(DashboardContext)
    const [lastMeasure, setlastMeasure] = useState(null)

    const cutNumber = (num) => {

        return +(Math.round(num + "e+2") + "e-2");

    }

    useEffect(() => {

        if (dataReady && deviceData !== null) {
            try {
                const measures = [...deviceData.measures]
                const last = measures.pop()
                setlastMeasure(cutNumber(last[particle]))
            } catch (e) {
                console.log(e)
            }
        }


    }, [deviceData])

    if (deviceInfo === null) {
        return (
            <Box width={'100%'} height={'93%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                <Typography variant="h6" color="primary.main"><strong>Selecciona un dispositivo</strong></Typography>

            </Box>
        )
    }

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'80%'}>
            {!dataReady && <CircularProgress variant='indeterminate' size={100} color='secondary' />}

            {dataReady && <Typography variant="h4" color="secondary.main" textAlign={'center'}><strong>{lastMeasure} {tag}</strong></Typography>}

        </Box>
    )
}
