import { Button, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Global/Context/UserContext'


export const LoginButton = ({ isLoginPage }) => {

    const { authStatus, logout } = useContext(UserContext)

    if (authStatus && !isLoginPage) {

        return (
            <>

                <Divider sx={{ display: { xs: 'none', md: 'flex' } }} orientation='vertical' color={'white'} variant={'middle'} />
                <Stack spacing={1} direction={'row'}>
                    <Button sx={{ display: { xs: 'none', md: 'flex' } }} color='inherit' component={NavLink} to={'/dashboard'}>Dashboard</Button>
                    <Button sx={{ display: { xs: 'none', md: 'flex' } }} onClick={e => logout()} color='inherit' variant='outlined' component={NavLink} to={'/auth/login'}>Cerrar Sesion</Button>
                </Stack>

            </>
        )
    }

    if (authStatus || isLoginPage) return;

    return (
        <>

            <Divider sx={{ display: { xs: 'none', md: 'flex' } }} orientation='vertical' color={'white'} variant={'middle'} />
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} color='inherit' variant='outlined' component={NavLink} to={'/auth/login'}>Iniciar Sesion</Button>

        </>
    )
}
