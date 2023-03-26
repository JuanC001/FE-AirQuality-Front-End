import React, { useState, useContext, useEffect } from 'react'

import { MapContainer, TileLayer, AttributionControl } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './Map.css'
import { userCoords } from '../hooks/userCoords'
import { Box, Button, Typography } from '@mui/material'

const Map = () => {

    const [coords, setcoords] = useState(null)

    const actualizarMapa = () => {

        navigator.geolocation.getCurrentPosition((position) => {

            setcoords([position.coords.latitude, position.coords.longitude])
            console.log(position.coords)
        })



    }

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {

            setcoords([position.coords.latitude, position.coords.longitude])

        })
        console.log(coords)

    }, [])

    if (coords !== null) {
        return (
            <MapContainer center={coords} zoom={14} scrollWheelZoom={true}>

                <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />

            </MapContainer>
        )
    } else {

        return (
            <Box display={'flex'} alignContent={'center'} alignItems={'center'} height={'100%'} textAlign={'center'}>
                <Box textAlign={'center'} mx={'auto'}>
                    <Typography variant="body1" color="initial" textAlign={'center'}>Si ves esto, pulsa el boton y activa la ubicación</Typography>
                    <Button onClick={actualizarMapa}>Actualizar Mapa...</Button>
                </Box>
            </Box>
        )

    }

}

export default Map;