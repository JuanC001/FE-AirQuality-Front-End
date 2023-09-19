import { Box, Paper, Tooltip, Typography, styled } from '@mui/material'
import React from 'react'
import { Bar, BarChart, LabelList, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { useTheme } from '@mui/material'

const DashBox = styled(Box)(({ theme }) => ({

    borderRadius: '10px',
    transition: 'ease 0.2s',
    height: '100%',
    width: '100%',
    ':hover': {

        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

    },

}))

export const MainChart = ({ deviceData, dataKey }) => {

    if (deviceData === undefined) return (
        <DashBox display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
            <Typography variant={'h4'}>No hay registros</Typography>
        </DashBox >)

    const theme = useTheme()

    const cutNumber = (num) => {

        return +(Math.round(num + "e+1") + "e-1");

    }

    try {

        const { measures } = deviceData
        return (
            <DashBox component={Paper} elevation={6} height={'100%'} zIndex={1}>

                <ResponsiveContainer width={'100%'} height={'100%'}>

                    <BarChart data={measures} margin={{ top: 30 }}>

                        <Bar dataKey={dataKey} fill={theme.palette.primary.main} >
                            <LabelList dataKey={dataKey} position={'top'} formatter={cutNumber} />
                        </Bar>

                        <XAxis dataKey="date" />
                        <Tooltip active={true} cursor={false} position={{ y: 100 }} />

                    </BarChart>

                </ResponsiveContainer>

            </DashBox>
        )

    } catch (error) {

    }


}
