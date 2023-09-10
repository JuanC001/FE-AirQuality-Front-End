import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const TextMetrics = ({ text, dataUnit = 'not defined', data = 0, dataReady }) => {

    const [lastMeasure, setlastMeasure] = useState(null)

    useEffect(() => {

        setlastMeasure(cutNumber(data))

    }, [data])

    const cutNumber = (num) => {

        return +(Math.round(num + "e+2") + "e-2");

    }

    return (
        <Box width={'100%'} height={'100%'} >

            <Stack height={'100%'} p={2}>
                <Box height={'20%'} >
                    <Typography variant="h5"><b>{text}</b></Typography>
                    <Divider variant='middle' />
                </Box>
                <Box height={'70%'} display={'flex'} mx={'auto'} alignItems={'center'}>
                    <Typography variant="h4" color="secondary.main" textAlign={'center'}><b>{lastMeasure}</b> {dataUnit}</Typography>
                </Box>
            </Stack>


        </Box>
    )
}
