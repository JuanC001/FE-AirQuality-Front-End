import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { Box, Button, Skeleton } from '@mui/material'

export const Map = () => {

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
      <Skeleton variant='rectangular' width={'100%'} height={'100%'} animation={'wave'}/>
    </Box>

  </>

  return (

    <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>

      <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />

    </MapContainer>


  )
}
