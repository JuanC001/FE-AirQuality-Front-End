import React, { useEffect, useMemo, useRef, useState } from "react";

import "leaflet/dist/leaflet.css";
import { Autocomplete, Box, Button, Grid, IconButton, Input, Paper, Skeleton, TextField, Typography } from "@mui/material";

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { getEnvVariables } from "../../../../helpers";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { useGeocoding } from "../../../Hooks/useGeocoding";
import { marker } from "leaflet";

import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { AnimatePresence, motion } from "framer-motion";

export const Map = ({ saveAddress }) => {

  const { getDirections } = useGeocoding()
  const [loadedMap, setloadedMap] = useState(false)
  const [direction, setDirection] = useState('')
  const [directions, setDirections] = useState([])
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 })
  const [coords, setCoords] = useState({
    lat: '',
    lng: ''
  })

  const handleSearch = (result) => {

    const { lat, lng } = result.geometry.location
    const { formatted_address } = result
    setCoords({
      lat, lng
    })

    setMarkerPosition({ lat, lng })

    saveAddress({
      lat, lng, address: formatted_address
    })

  }

  const MapComponent = ({ coords }) => {
    const map = useMap()
    map.setView(coords, 15)
    return null
  }

  const handleDirection = async (e) => {

    const dir = e.target.value

    setDirection(dir)

    if (dir.length > 0) {

      getDirections(dir).then((res) => {

        setDirections(res.results)

      })

    }
    if (e.target.value == "") {
      console.log("vacio")
      setDirections([])
    }

  }

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
          <MapComponent coords={coords} />
        </MapContainer>
      </Box>
      <Box height={'37%'} mt={1}>

        <Box height={'30%'} mb={1}>
          <TextField value={direction} label={'Ingrese aquí la dirección'} placeholder="Calle 123 45 67" onChange={handleDirection} fullWidth />
        </Box>
        <Box height={'70%'} sx={{ overflowY: 'scroll', overflowX: 'hidden' }}>
          <AnimatePresence>
            {directions.map((item, ind) => (
              <div key={ind}>
                <motion.div key={ind} layout initial={{ x: '-100%' }} animate={{ x: 0 }}>
                  <Grid container my={0.5} width={'90%'} mx={'auto'} component={Paper} elevation={'2'} alignContent={'center'} alignItems={'center'}>

                    <Grid item xs={10}>
                      <Typography variant="caption" color="initial">{item.formatted_address}</Typography>
                    </Grid>

                    <Grid item xs={2}>
                      <IconButton onClick={e => handleSearch(item)}>
                        <LocationSearchingIcon />
                      </IconButton>
                    </Grid>

                  </Grid>
                </motion.div>

              </div>
            ))}
          </AnimatePresence>

        </Box>

      </Box>
    </>
  ) : <></>
}