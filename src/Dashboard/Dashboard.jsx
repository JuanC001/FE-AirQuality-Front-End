import React, { useContext } from 'react'
import { UserContext } from '../Global/Context/UserContext'
import { Dashboard as InvDash } from './Pages/Investigator/Pages/Dashboard'
import { Navigate } from 'react-router-dom'
import { DashboardProvider } from './Context/DashboardProvider'
import { Admin } from './Pages/Admin/Pages/Admin'
import { User } from './Pages/User/Pages/User'
import { Box, CssBaseline } from '@mui/material'


import { USER_TYPES } from '../Consts/UsersTypes'
import { FirstLogin } from './components/FirstLogin'

const ErrorDashboard = ({ role }) => {

    if (role === USER_TYPES.ADM || role === USER_TYPES.INV || role === USER_TYPES.USR) return null

    return (
        <Box height={'90vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <h1>Rol no definido, contactese con el administrador</h1>
        </Box>
    )

}

export const Dashboard = () => {

    const { user } = useContext(UserContext)

    if (user) {
        const role = user.role

        return (
            <>
                <CssBaseline />
                {user.firstLogin && <FirstLogin user={user} />}
                {role === USER_TYPES.ADM && <Admin />
                }
                {role === USER_TYPES.INV && <DashboardProvider><InvDash /></DashboardProvider>}
                {role === USER_TYPES.USR && <DashboardProvider><User /></DashboardProvider>}
                <ErrorDashboard role={role} />
            </>
        )
    }

    return <Navigate to={'/'} />

}
