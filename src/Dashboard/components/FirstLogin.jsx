import { Alert, Box, Button, CircularProgress, Divider, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { USER_TYPES } from '../../Consts/UsersTypes'
import { useMyData } from '../Hooks/useMyData'
import { useForm } from '../Hooks/useForm'
import Swal from 'sweetalert2'

import './FirstLogin.css'
import { UserContext } from '../../Global/Context/UserContext'

export const FirstLogin = ({ user }) => {

    const { changePassword } = useMyData()
    const { logout } = useContext(UserContext)

    const { oldPassword, password1, password2, onInputChange } = useForm({
        oldPassword: '',
        password1: '',
        password2: '',
    })

    const [firstLogin, setFirstLogin] = useState(user.firstLogin)
    const [doublePasswordError, setDoublePasswordError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDoublePasswordError(false)
        setPasswordError(false)

        const passwordCheck = password1 !== password2
        setIsLoading(true)

        setDoublePasswordError(passwordCheck)

        if (passwordCheck) return setIsLoading(false)
        if (password1.length < 6) {
            setIsLoading(false)
            return Swal.fire({
                title: 'La contraseña debe tener al menos 6 caracteres',
                icon: 'error',
                text: 'La contraseña debe tener al menos 6 caracteres',
            })
        }

        if (password1 === oldPassword) {
            setIsLoading(false)
            return Swal.fire({
                title: 'La contraseña debe ser diferente a la anterior',
                icon: 'error',
                text: 'La contraseña debe ser diferente a la anterior',
            })
        }

        if (password1.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/) === null){
            setIsLoading(false)
            return Swal.fire({
                title: 'La contraseña debe tener al menos una mayúscula, una minúscula y un número',
                icon: 'error',
                text: 'La contraseña debe tener al menos una mayúscula, una minúscula y un número',
            })
        }

        const { result, msg } = await changePassword(user.uid, oldPassword, password1)
        setPasswordError(!result)

        if (result && !passwordCheck) {

            setFirstLogin(false)
            setIsLoading(false)

            Swal.fire({
                title: 'Se ha cambiado la contraseña',
                icon: 'success',
                text: 'Se ha cambiado la contraseña, por favor, inicia sesión nuevamente',
            }).then(() => {
                logout()
                window.location.reload()
            })

            return

        }

        setIsLoading(false)
        return

    }

    return (
        <Modal open={firstLogin}

            sx={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '100%',
                width: '100%',
                display: 'flex',
                position: 'absolute',
                zIndex: 2

            }}>

            <Box
                component={Paper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                bgcolor={'#fff'}
                sx={{
                    borderRadius: '20px',
                    minHeight: '50%',
                    maxHeight: '80%',
                    width: {
                        xs: '90%',
                        md: '50%'
                    },
                    m: 'auto',
                    p: 4,
                    overflowY: 'scroll',
                    zIndex: -1
                }}>

                <Stack gap={2}>
                    <Box bgcolor={'white'} sx={{ position: 'sticky', top: 0 }} py={1}>
                        <Typography mb={2} variant="h2" color="black" textAlign={'center'} fontSize={{ xs: '10vw', sm: '5vw', md: '3vw', xl: '2vw' }}>¡Bienvenido a Airquality App! 🎉</Typography>
                        <Divider variant='middle' />
                    </Box>
                    <Stack gap={4} component={'form'} onSubmit={handleSubmit}>

                        <Typography variant="body1" color="black" textAlign={'justify'} mx={'auto'}>
                            {user.role === USER_TYPES.USR && 'Dentro de esta aplicación podrá visualizar los datos de calidad del aire del dispositivo que se encuentra asociado a su cuenta'}
                            {user.role === USER_TYPES.ADM && 'Dentro de esta aplicación podrá visualizar y administrar todos los usuarios y dispositivos registrados en la APP'}
                            {user.role === USER_TYPES.INV && 'Dentro de esta aplicación podrá visualizar los datos de calidad del aire de todos los dispositivos registrados en la APP, registrado a su dispositivo.'}
                        </Typography>

                        <Typography variant="body1" color="black" textAlign={'justify'} mx={'auto'}>
                            Como es primera vez que inicias sesión, por favor, cambia tu contraseña a continuación:
                        </Typography>

                        {passwordError && <Alert severity='error'>La contraseña no es correcta</Alert>}

                        <TextField label='Contraseña que se entregó' required variant='standard' type='password' value={oldPassword} name='oldPassword' onChange={onInputChange} error={passwordError} />
                        {doublePasswordError && <Alert severity='error'>Las contraseñas no coinciden</Alert>}
                        <TextField label='Nueva Contraseña' required variant='standard' type='password' value={password1} name='password1' onChange={onInputChange} error={doublePasswordError} />
                        <TextField label='Repite la Contraseña' required variant='standard' type='password' value={password2} name='password2' onChange={onInputChange} error={doublePasswordError} />

                        <Button variant='contained' color='primary' type='submit' fullWidth>
                            {isLoading ? <CircularProgress /> : '¡Cambia mi contraseña!'}
                        </Button>

                    </Stack>
                </Stack>

            </Box>

        </Modal >
    )
}
