import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";
import { Box, CircularProgress, Grid, Skeleton, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

import { getEnvVariables } from "../../../../helpers";
import { MapContainer, Marker, useMap } from "react-leaflet";

import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { useGeocoding } from "../../../Hooks/useGeocoding";

import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { AnimatePresence, motion } from "framer-motion";

export const Map = ({ saveAddress, actualAddress }) => {

  const { VITE_API_MAPS_KEY } = getEnvVariables()

  const { autocomplete, getLongLat } = useGeocoding()
  const [loadedMap, setloadedMap] = useState(false)
  const [direction, setDirection] = useState('')
  const [directions, setDirections] = useState([])
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 })
  const [itemSelected, setItemSelected] = useState(null)
  const [coords, setCoords] = useState({
    lat: '',
    lng: ''
  })

  const [searchingState, setSearchingState] = useState(false)

  const MapComponent = ({ coords }) => {
    const map = useMap()
    map.setView(coords, 15)
    return null
  }

  const handleSearch = async (e) => {

    const { result } = await getLongLat(e.place_id)
    const { lat, lng } = result.geometry.location
    const { formatted_address } = result

    setMarkerPosition({ lat, lng })
    setCoords({ lat, lng })
    saveAddress({
      lat, lng, address: formatted_address
    })


  }

  const handleClickToggle = (e, item) => {

    setItemSelected(item)

  }

  const handleDirection = async (e) => {

    const dir = direction
    setItemSelected(null)

    //    const dir = direction
    setSearchingState(true)
    autocomplete(dir).then((res) => {

      setDirections(res)
      setSearchingState(false)

    })

  }

  useEffect(() => {
    if (direction == "") {
      setDirections([])
      setSearchingState(false)
    }
  }, [direction])

  useEffect(() => {

    if (direction.length < 1) return

    setSearchingState(true)

    const delaySearch = setTimeout(() => {

      if (direction.length > 0) {
        handleDirection()
      }

    }, 1000)

    return () => clearTimeout(delaySearch)

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

  if (!loadedMap) return <>

    <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Skeleton variant='rectangular' width={'100%'} height={'100%'} animation={'wave'} />
    </Box>

  </>

  return loadedMap ? (
    <>
      <Box height={'60%'}>
        <MapContainer center={coords} style={{ width: '100%', height: '100%' }}>
          <ReactLeafletGoogleLayer apiKey={VITE_API_MAPS_KEY} />
          <Marker position={markerPosition} />
          <MapComponent coords={coords} />
        </MapContainer>
      </Box>
      <Box height={'37%'} mt={1}>

        <Box height={'30%'} mb={1}>
          <TextField value={direction} label={'Ingrese aquí la dirección'} placeholder="Calle 123 45 67" onChange={e => setDirection(e.target.value)} fullWidth

            InputProps={{
              endAdornment: (
                <>
                  {
                    searchingState && <CircularProgress />
                  }
                </>
              )
            }}

          />
        </Box>

        <Box height={'70%'} sx={{ overflowY: 'scroll', overflowX: 'hidden' }}>
          <AnimatePresence>
            <ToggleButtonGroup orientation="vertical" value={itemSelected} onChange={handleClickToggle} exclusive fullWidth>
              {directions.map((item, ind) => (
                <ToggleButton key={ind} value={ind} color="secondary" fullWidth onClick={e => handleSearch(item)}>

                  <motion.div key={ind} layout initial={{ x: '-100%' }} animate={{ x: 0 }}>
                    <Grid container my={0.5} width={'90%'} mx={'auto'} alignContent={'center'} alignItems={'center'}>

                      <Grid item xs={10}>
                        <Typography variant="caption" color="initial">{item.description}</Typography>
                      </Grid>

                      <Grid item xs={2}>

                        <LocationSearchingIcon />

                      </Grid>

                    </Grid>

                  </motion.div>

                </ToggleButton>

              ))}
            </ToggleButtonGroup>
          </AnimatePresence>

        </Box>

      </Box>
    </>
  ) : <></>
}