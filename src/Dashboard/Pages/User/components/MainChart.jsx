import { Box, Paper, Typography, styled } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Bar, BarChart, AreaChart, Area, Brush, LabelList, Legend, ResponsiveContainer, XAxis, Tooltip } from 'recharts'

import { useTheme } from '@mui/material'
import { createChart, ColorType } from 'lightweight-charts'

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

    const [data, setData] = useState(null)

    useEffect(() => {
        if (deviceData === null) {
            return
        }
        const newData = deviceData.measures.map((item, index) => {

            const date = Date.parse(item.date) / 1000

            return {
                time: date,
                value: item[dataKey]
            }
        })

        setData(newData)
    }, [deviceData, dataKey])

    if (data === null) {
        return (
            <Box width={'100%'} height={'40vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>

                <Typography variant="h4" color="primary.main"><strong>Selecciona un dispositivo</strong></Typography>

            </Box>
        )
    }

    return (
        <Box>
            <ChartComponent data={data} />
        </Box>
    )

}

export const ChartComponent = props => {
    const {
        data,
        colors: {
            backgroundColor = 'rgba(255, 255, 255, 0.28)',
            lineColor = '#2962FF',
            textColor = 'black',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 500,
                timeScale: {
                    timeVisible: true,
                    secondsVisible: true,
                },
            });
            chart.timeScale({

            }).fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div style={{
            position: 'relative',
        }}>
            <Box
                ref={chartContainerRef}
            />
        </div>
    );
};

export const MainChart2 = ({ deviceData, dataKey }) => {

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
            <DashBox component={Paper} elevation={6} minHeight={'100%'} p={3}>

                <Typography variant={'h5'} textAlign={'start'}>Medición (24hrs)</Typography>

                <Box height={'40vh'}>
                    <ResponsiveContainer width={'100%'} height={'100%'}>

                        <AreaChart data={measures} margin={{ top: 30 }}>
                            <Tooltip />
                            <Brush dataKey={dataKey} height={30} width={'90%'} stroke={theme.palette.primary.main} travellerWidth={20} startIndex={1} endIndex={2} />
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="white" stopOpacity={2} />
                                </linearGradient>
                            </defs>
                            <Area dataKey={dataKey} fill={"url(#colorUv)"} >
                            </Area>

                            <XAxis dataKey="date" />

                        </AreaChart>

                    </ResponsiveContainer>
                </Box>

            </DashBox>
        )

    } catch (error) {

    }


}


