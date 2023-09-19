import React, { useContext, useEffect, useState } from 'react'
import { DashBox } from '../DashBox'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './Map.css'
import { Box, Button, Skeleton } from '@mui/material'

import { getEnvVariables } from "../../../../../helpers";

const { VITE_API_MAPS_KEY } = getEnvVariables()

import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { DashboardContext } from '../../../../Context/DashboardContext'

export const Map = () => {

  const { devices, deviceInfo } = useContext(DashboardContext)

  console.log(deviceInfo)

  const [loadedMap, setloadedMap] = useState(false)
  const [coords, setCoords] = useState({
    lat: '',
    lng: ''
  })


  useEffect(() => {

    navigator.geolocation.getCurrentPosition((pos) => {

      const coords = pos.coords
      setCoords({
        lat: coords.latitude,
        lng: coords.longitude
      })
      setloadedMap(true)

    })

  }, [loadedMap])

  if (!loadedMap) return <>

    <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Skeleton variant='rectangular' width={'100%'} height={'100%'} animation={'wave'} />
    </Box>

  </>

  const MapComponent = () => {
    const map = useMap()
    if (deviceInfo.lat === 0 && deviceInfo.lng === 0) return
    map.setView([deviceInfo.lat, deviceInfo.lng], 15)
    return null
  }

  return (
    <Box height={'100%'} width={'100%'}>

      <MapContainer center={coords} zoom={13} scrollWheelZoom={true}>

        <ReactLeafletGoogleLayer apiKey={VITE_API_MAPS_KEY} />

        {devices && deviceInfo &&
          devices.map((device, index) => {

            if (device.lat === 0 && device.lng === 0) return

            return <><Marker key={index} position={[device.lat, device.lng]}>
              <Popup>
                {device.owner}
              </Popup>
            </Marker>
              <MapComponent />
            </>
          })
        }

      </MapContainer>

    </Box>
  )
}




















/*

const anotherMap = () => {

  const [loadedMap, setloadedMap] = useState(false)
  const [coords, setCoords] = useState(null)

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((pos) => {

      const coords = pos.coords
      setCoords([coords.latitude, coords.longitude])
      setloadedMap(true)

    })

  }, [loadedMap])

  if (!loadedMap) return <>

    <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Skeleton variant='rectangular' width={'100%'} height={'100%'} animation={'wave'} />
    </Box>

  </>

  return (

    <Box height={'100px'} width={'100px'} id={'map'}>

    </Box>
  )
}

*/