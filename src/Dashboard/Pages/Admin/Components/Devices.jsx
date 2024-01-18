import React, { useState } from 'react'

import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { useZipCreator } from '../../../Hooks/useZipCreator'
import Swal from 'sweetalert2'

import './User.css'
import { useDevices } from '../../../Hooks/useDevices'

export const Devices = ({ devices, getDevices }) => {

    const { downloadDevices } = useZipCreator()

    const getAllDevices = () => {

        downloadDevices()

    }

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

                    <TableHead sx={{ position: 'sticky', top: 0, backdropFilter: 'blur(8px)', backgroundColor: 'rgba(126, 179, 18,0.5)', zIndex: '1' }}>
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center', color: 'black' }}>Id</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: 'black' }}>Disponible</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: 'black' }}>Dueño</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: 'black' }}>Accion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            devices?.map((device) => (
                                <IndividualDevice key={device.id} device={device} getDevices={getDevices} />
                            ))
                        }
                    </TableBody>

                </Table>
            </Box>

        </Box>
    )
}

const IndividualDevice = ({ device, getDevices }) => {

    const [hover, setHover] = useState(false)
    const { deleteDevice } = useDevices()

    const handleHover = () => {
        setHover(!hover)
    }

    const handleDelete = async () => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteDevice(device._id)
                if (response.msg === 'Dispositivo eliminado') {
                    Swal.fire({
                        title: "Se ha eliminado el dispositivo",
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    getDevices()
                }
            }
        })
    }

    return (
        <TableRow onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <TableCell sx={{ textAlign: 'center' }}>{device.id}</TableCell>
            <TableCell sx={{ textAlign: 'center', color: device.owner ? 'red' : 'secondary.dark' }}><b>{device.owner ? 'No disponible' : 'Disponible'}</b></TableCell>
            <Tooltip sx={{ backgroundColor: hover ? 'primary.light' : '' }} title={device.owner ? `el dispositivo le pertenece a ${device.owner}` : `Puedes asignarle un dueño agregando un usuario`} placement="top">
                <TableCell sx={{ textAlign: 'center' }}>{device.owner ? device.owner : ''}</TableCell>
            </Tooltip>
            <TableCell sx={{ textAlign: 'center', zIndex: '0' }}>
                <Tooltip title={device.owner ? 'Primero elimina o desvincula el usuario' : 'Elimina el dispositivo'}>

                    <div>
                        <Button variant='outlined' color='error' disabled={device.owner ? true : false} onClick={handleDelete}>
                            Eliminar Dispositivo
                        </Button>
                    </div>
                </Tooltip>

            </TableCell>


        </TableRow>

    )
}