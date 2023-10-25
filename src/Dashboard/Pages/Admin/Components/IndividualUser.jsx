import { Box, Button, Divider, Grid, IconButton, MenuItem, Modal, Paper, Select, Stack, TableCell, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Map } from './Map'

import { USER_TYPES } from '../../../../Consts/UsersTypes'
import CloseIcon from '@mui/icons-material/Close'
import { useUsers } from '../../../Hooks/useUsers'
import Swal from 'sweetalert2'

const ModalEdit = ({ modalOpen, handleClose, user }) => {

    const { email, name, role } = user
    const [selectedRole, setSelectedRole] = useState(role)

    const handleSelectorChange = (e) => {

        setSelectedRole(e.target.value)
        if (e.target.value === role) {
            console.log('No hay cambios')
        }

    }

    const handleSave = (e) => {
        e.preventDefault()
    }

    return (
        <>

            <Modal open={modalOpen} onClose={handleClose} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Box width={'80vh'} height={'80vh'} bgcolor={'white'} borderRadius={'20px'} p={5} position={'relative'}>
                    <IconButton sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px'
                    }} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant={'h4'} textAlign={'start'}>Editar Usuario</Typography>
                    <Divider />
                    <Box>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant={'body1'}><b>Nombre: </b></Typography>
                                <TextField value={name} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'body1'}><b>Email: </b></Typography>
                                <TextField value={email} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'body1'}><b>Rol: </b></Typography>
                                <Select value={selectedRole} fullWidth onChange={handleSelectorChange}>
                                    <MenuItem value={USER_TYPES.ADM}>Administrador</MenuItem>
                                    <MenuItem value={USER_TYPES.INV}>Investigador</MenuItem>
                                    <MenuItem value={USER_TYPES.USR}>Usuario</MenuItem>
                                </Select>
                            </Grid>
                            {selectedRole === USER_TYPES.USR &&
                                < Grid item xs={12} height={'400px'}>

                                    <Map />

                                </Grid>
                            }
                        </Grid>

                    </Box>

                    <Box position={'absolute'} sx={{ bottom: '10px', right: '5%' }}>

                        <Button variant={'contained'} color={'secondary'} onClick={handleSave}>Guardar</Button>

                    </Box>

                </Box>
            </Modal >

        </>
    )

}

export const IndividualUser = ({ user, getUsers }) => {

    const { deleteUser } = useUsers()


    const { email, name, role, _id: id } = user

    const [modalOpen, setModalOpen] = useState(false)
    const handleClose = () => {
        setModalOpen(false)
    }

    const handleRemove = () => {

        Swal.fire({
            title: `¿Estas seguro de eliminar a ${name}?`,
            text: "No podras revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id)
                Swal.fire(
                    'Eliminado!',
                    'El usuario ha sido eliminado.',
                    'success'
                ).then(() => {
                    getUsers()
                })
            }
        })

    }

    return (
        <>
            <ModalEdit modalOpen={modalOpen} handleClose={handleClose} user={user} />
            <TableRow>

                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{role}</TableCell>
                <TableCell>
                    <Grid container columnSpacing={2}>

                        {/*<Grid item xs={12} md={6}>
                            <Button variant={'outlined'} color={'primary'} onClick={() => { setModalOpen(true); }} fullWidth>Editar</Button>
                        </Grid>*/}
                        <Grid item xs={12} md={6}>
                            <Button variant={'outlined'} color={'error'} onClick={handleRemove} fullWidth>Eliminar</Button>
                        </Grid>

                    </Grid>
                </TableCell>

            </TableRow>
        </>
    )
}