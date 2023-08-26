import React, { useEffect, useState } from 'react'
import { DashBox } from '../DashBox'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './Map.css'
import { Box, Button, Skeleton } from '@mui/material'

import { getEnvVariables } from "../../../../../helpers";

const { VITE_API_PLACES_KEY } = getEnvVariables()

import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'

export const Map = () => {

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


  return (
    <Box height={'100%'} width={'100%'}>

      <MapContainer center={coords} zoom={13} scrollWheelZoom={true}>

        <ReactLeafletGoogleLayer apiKey={VITE_API_PLACES_KEY} />

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