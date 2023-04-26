import { Box, CircularProgress, Typography, useTheme } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { DashboardContext } from '../../../../Context/DashboardContext'
import { ResponsiveContainer, LineChart as LC, Line, Tooltip } from 'recharts'

export const LineChart = ({ particle }) => {

  const { deviceData, deviceInfo, dataReady } = useContext(DashboardContext)
  const theme = useTheme()

  const [lastMeasure, setlastMeasure] = useState(null)

  useEffect(() => {

    if (dataReady && deviceData !== null) {
      try {
        const measures = [...deviceData.measures]
        const last = measures.pop()
        setlastMeasure(last[particle])
      }catch(e) {
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

    <Box width={'100%'} height={'93%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

      {!dataReady && <CircularProgress variant='indeterminate' size={100} color='secondary' />}
      {dataReady &&

        <Box width={'100%'} height={'60%'}>

          <ResponsiveContainer width={'100%'} height={'100%'}>

            <LC data={deviceData.measures}>

              <Line dataKey={particle} fill={theme.palette.secondary.main} stroke={theme.palette.secondary.main} />
              <Tooltip active={true} cursor={false} position={{ y: 100 }} />

            </LC>

          </ResponsiveContainer>

          <Typography variant="body1" color="initial" textAlign={'center'}><strong>{lastMeasure}PPM</strong></Typography>

        </Box>}

    </Box>

  )
}
