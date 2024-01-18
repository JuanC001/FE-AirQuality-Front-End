import { Box, Button, Divider, Paper, Stack, ToggleButton, Typography, styled, useTheme, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'

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

}))

const activeStyle = (theme) => ({

    backgroundColor: theme.palette.primary.light,
    transform: 'translateY(-5px)',
    boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

})

export const TextMetrics = ({ text, dataUnit = 'not defined', data = 0, dataReady, active }) => {

    const [lastMeasure, setlastMeasure] = useState(null)
    const theme = useTheme()

    useEffect(() => {

        setlastMeasure(cutNumber(data))

    }, [data])

    const cutNumber = (num) => {

        return +(Math.round(num + "e+2") + "e-2");

    }

    return (
        <DashBox name={text} component={Paper} elevation={3} sx={active ? activeStyle(theme) : {}}>



            <Box width={'100%'} height={'100%'} >

                <Stack height={'100%'} p={2}>

                    <Box height={'20%'} >

                        <Typography variant="h5" sx={{ fontSize: { xs: '5vw', sm: '3vw', md: '1.5vw' } }}><b>{text}</b></Typography>
                        <Divider variant='middle' />



                    </Box>
                    <Box height={'70%'} display={'flex'} mx={'auto'} alignItems={'center'}>
                        {!dataReady ?

                            <Box>
                                <CircularProgress />
                            </Box>
                            :
                            <Typography variant="h4" color="secondary.main" textAlign={'center'} sx={{ fontSize: { xs: '7.5vw', md: '2vw', xl: '2vw' } }}><b>{lastMeasure}</b> {dataUnit}</Typography>
                        }
                    </Box>
                </Stack>

            </Box>
        </DashBox>
    )
}
