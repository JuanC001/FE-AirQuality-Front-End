import { Button, Divider } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

export const LoginButton = ({ authStatus, isLoginPage }) => {

    if (authStatus === 'authorized' || isLoginPage) return;

    return (
        <>

            <Divider sx={{ display: { xs: 'none', md: 'flex' } }} orientation='vertical' color={'white'} variant={'middle'} />
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} color='inherit' variant='outlined' component={NavLink} to={'/auth/login'}>Iniciar Sesion</Button>

        </>
    )
}
