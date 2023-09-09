import { Box, Button, Divider, Grid, IconButton, MenuItem, Modal, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Map } from './Map'

import { USER_TYPES } from '../../../../Consts/UsersTypes'
import CloseIcon from '@mui/icons-material/Close'
import { useUsers } from '../../../Hooks/useUsers'
import Swal from 'sweetalert2'

const ModalEdit = ({ modalOpen, handleClose, user }) => {

    const { email, name, role } = user

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
                                <Select value={role} fullWidth>
                                    <MenuItem value={USER_TYPES.ADM}>Administrador</MenuItem>
                                    <MenuItem value={USER_TYPES.INV}>Investigador</MenuItem>
                                    <MenuItem value={USER_TYPES.USR}>Usuario</MenuItem>
                                </Select>
                            </Grid>
                            {role === USER_TYPES.USR &&
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
            title: '¿Estas seguro?',
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
            <Box minHeight={'40px'} width={'98%'} mx={'auto'} my={2}>
                <Paper sx={{ height: '100%', p: 2 }}>

                    <Grid container>

                        <Grid item xs={12} md={3}>
                            <Typography variant={'h6'}><b>Nombre: </b></Typography>
                            <Typography variant={'h6'}><i>{name}</i></Typography>

                        </Grid>

                        <Grid item xs={12} md={3}>

                            <Typography variant={'h6'}><b>Email: </b></Typography>
                            <Typography variant={'h6'}><i>{email}</i></Typography>

                        </Grid>

                        <Grid item xs={12} md={3} textAlign={'center'}>

                            <Typography variant={'h6'}><b>Rol: </b></Typography>
                            <Typography variant={'h6'}><i>{role}</i></Typography>

                        </Grid>

                        <Grid item xs={12} md={3} display={'flex'} justifyContent={'center'}>

                            <Stack gap={1} width={'100px'}>
                                <Button variant={'contained'} color={'primary'} onClick={e => setModalOpen(true)}>Editar</Button>
                                <Button variant={'contained'} color={'error'} onClick={handleRemove}>Eliminar</Button>
                            </Stack>
                        </Grid>

                    </Grid>

                </Paper>
            </Box>
        </>
    )
}