import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { DashboardContext } from '../../../../Context/DashboardContext'

import { useAqi } from '../../../User/hooks/useAqi'

export const Quality = () => {

    const { deviceData } = useContext(DashboardContext)

    const { calculateAqi, AQI } = useAqi()
    useEffect(() => {
        if (deviceData === null) return
        calculateAqi(deviceData)
    })

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'90%'}>

            <CircularProgressWithLabel value={AQI} />

        </Box>
    )
}

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" size={100} {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Typography variant="body1" component="div" color="text.secondary">
                    <strong>
                        {`${props.value}`}
                    </strong>
                </Typography>
            </Box>
        </Box>
    );
}
