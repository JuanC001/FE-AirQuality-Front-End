import React, { useContext, useEffect, useRef, useState } from 'react'

import { createChart, ColorType } from 'lightweight-charts'
import { DashboardContext } from '../../../../Context/DashboardContext';

import { testData } from './testdata';

import { Box, Typography } from '@mui/material'

const initialData = [
    { time: Date.parse('2018-12-22 1:00'), value: 32.51 },
    { time: '2018-12-23 2:00', value: 31.11 },
    { time: '2018-12-24 3:00', value: 27.02 },
    { time: '2018-12-25 4:00', value: 27.32 },
    { time: '2018-12-26 5:00', value: 25.17 },
    { time: '2018-12-27 6:00', value: 28.89 },
    { time: '2018-12-28 6:00', value: 25.46 },
    { time: '2018-12-29 8:00', value: 23.92 },
    { time: '2018-12-30 9:00', value: 22.68 },
    { time: '2018-12-31 10:00', value: 22.67 },
];

export const LightweightCharts = ({ }) => {

    const { deviceData, deviceInfo, dataReady, keyActive } = useContext(DashboardContext)

    const [data, setData] = useState(null)

    useEffect(() => {
        if (deviceData === null) {
            return
        }
        const newData = deviceData.measures.map((item, index) => {

            const date = Date.parse(item.date) / 1000

            return {
                time: date,
                value: item[keyActive]
            }
        })

        setData(newData)
    }, [deviceData, keyActive])

    if (data === null) {
        return (
            <Box width={'100%'} height={'40vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>

                <Typography variant="h4" color="primary.main"><strong>Selecciona un dispositivo</strong></Typography>

            </Box>
        )
    }

    return (
        <ChartComponent data={data} />
    )
}

export const ChartComponent = props => {
    const {
        data,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            textColor = 'black',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef();
    const [hour, setHour] = useState('')

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
                    secondsVisible: false,
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
            <div
                ref={chartContainerRef}
            />
        </div>
    );
};