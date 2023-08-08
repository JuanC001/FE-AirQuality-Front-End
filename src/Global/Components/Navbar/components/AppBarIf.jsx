import { AppBar } from '@mui/material'
import React from 'react'

export const AppBarIf = ({ children, isLoginPage }) => {

    if (isLoginPage) {
        return (

            <AppBar color='primary' sx={{ boxShadow: '0px 0px' }}>
                {children}
            </AppBar>

        )
    } else {
        return (

            <AppBar color='secondary' sx={{ color: 'white',backgroundColor: 'secondary.dark' }}>
                {children}
            </AppBar>

        )
    }


}
