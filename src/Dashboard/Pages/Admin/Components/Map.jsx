import React, { useEffect, useMemo, useRef, useState } from "react";

import "leaflet/dist/leaflet.css";
import { Autocomplete, Box, Button, Input, Skeleton, TextField } from "@mui/material";

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { getEnvVariables } from "../../../../helpers";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { useGeocoding } from "../../../Hooks/useGeocoding";
import { marker } from "leaflet";

export const Map = () => {

  const { getDirections } = useGeocoding()
  const [loadedMap, setloadedMap] = useState(false)
  const [direction, setDirection] = useState('')
  const [directions, setDirections] = useState([])
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 })
  const [coords, setCoords] = useState({
    lat: '',
    lng: ''
  })

  const handleDirection = async (e) => {

    setDirection(e.target.value)

  }

  useEffect(() => {

    if (direction.length > 0) {

      getDirections(direction).then((res) => {

        setDirections(res.results)
        console.log(res)

      })

    }

  }, [direction])

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

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  if (!loadedMap) return <>

    <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Skeleton variant='rectangular' width={'100%'} height={'100%'} animation={'wave'} />
    </Box>

  </>

  return loadedMap ? (
    <>
      <Box height={'60%'}>
        <MapContainer center={coords} zoom={11} style={containerStyle}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png" />
          <Marker position={markerPosition} />
        </MapContainer>
      </Box>
      <Box height={'37%'} mt={1}>

        <Box height={'30%'} mb={1}>
          <TextField onChange={handleDirection} fullWidth />
        </Box>
        <Box height={'70%'} sx={{ border: '1px solid lightgrey' }}>

          {directions.map((item) => (
            <>

              {item.formatted_address}

            </>
          ))}

        </Box>

      </Box>
    </>
  ) : <></>
}


const SearchList = ({ setItem, }) => {



}