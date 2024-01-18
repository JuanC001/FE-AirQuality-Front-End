import React, { useContext, useEffect, useRef, useState } from 'react'

import { createChart, ColorType } from 'lightweight-charts'
import { DashboardContext } from '../../../../Context/DashboardContext';

import { Box, Typography } from '@mui/material'

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
            <div
                ref={chartContainerRef}
            />
        </div>
    );
};