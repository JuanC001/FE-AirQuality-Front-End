import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Box, Button, Skeleton } from "@mui/material";

import GoogleMapReact from 'google-map-react'

export const Map = () => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

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

      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCPuObuRHzziwD6kIDSh5BUa8U7oCfeI5E' }}
        key={'AIzaSyCPuObuRHzziwD6kIDSh5BUa8U7oCfeI5E'}
        defaultCenter={coords}
        defaultZoom={defaultProps.zoom}
      >

      </GoogleMapReact>

    </Box>
  )
}
