import React, { useState, useEffect } from 'react'

import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { useDevices } from '../../../Hooks/useDevices'

import './User.css'

export const Devices = () => {

    const [devices, setDevices] = useState(null)
    const { getAdminDeviceList, getAll } = useDevices()

    const getDevicesList = async () => {

        const devicesList = await getAdminDeviceList()
        setDevices(devicesList)

    }

    const getAllDevices = async () => {

        const devicesList = await getAll()
        console.log(devicesList)
    }


    useEffect(() => {

        getDevicesList()

    }, [])


    return (
        <Box height={'100%'}>

            <Button variant='outlined' onClick={getAllDevices} fullWidth sx={{ height: '5%' }}>
                <Box mx={2}>
                    Descargar toda la Información
                </Box>
                <FontAwesomeIcon icon={faFileExcel} />
            </Button>

            <Box className={'usersBox'} width={'100%'} height={'90%'} sx={{ overflowY: 'scroll' }} mx={'auto'} mt={1}>
                <Table sx={{ position: 'relative' }}>

                    <TableHead sx={{ position: 'sticky', top: 0, backdropFilter: 'blur(8px)', backgroundColor: 'rgba(126, 179, 18,0.5)' }}>
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center', color: 'black' }}>Id</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: 'black' }}>Disponible</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: 'black' }}>Dueño</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            devices?.map((device) => (
                                <IndividualDevice key={device.id} device={device} />
                            ))
                        }
                    </TableBody>

                </Table>
            </Box>

        </Box>
    )
}

const IndividualDevice = ({ device }) => {

    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    return (
        <TableRow onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <TableCell sx={{ textAlign: 'center' }}>{device.id}</TableCell>
            <TableCell sx={{ textAlign: 'center', color: device.owner ? 'red' : 'secondary.dark' }}><b>{device.owner ? 'No disponible' : 'Disponible'}</b></TableCell>
            <Tooltip sx={{ backgroundColor: hover ? 'primary.light' : '' }} title={device.owner ? `el dispositivo le pertenece a ${device.owner}` : `Puedes asignarle un dueño agregando un usuario`} placement="top">
                <TableCell sx={{ textAlign: 'center' }}>{device.owner ? device.owner : ''}</TableCell>
            </Tooltip>

        </TableRow>

    )
}