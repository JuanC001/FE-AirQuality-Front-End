import { Divider, MenuItem } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const MenuGeneral = (props) => {

    const { menuClose } = props


    return (
        <>

            <MenuItem onClick={menuClose} component={NavLink} to={'/'}>Inicio</MenuItem>
            <MenuItem onClick={menuClose} component={NavLink} to={'/'}>Sobre Nosotros</MenuItem>
            <MenuItem onClick={menuClose} component={NavLink} to={'/'}>Sobre el Aire</MenuItem>
            <Divider />
            <MenuItem onClick={menuClose} component={NavLink} to={'/auth/login'}>Iniciar Sesion</MenuItem>

        </>
    )
}
