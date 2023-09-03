import React, { useContext } from 'react'
import { UserContext } from '../Global/Context/UserContext'
import { Dashboard as InvDash } from './Pages/Investigator/Pages/Dashboard'
import { Navigate } from 'react-router-dom'
import { DashboardProvider } from './Context/DashboardProvider'
import { Admin } from './Pages/Admin/Pages/Admin'
import { User } from './Pages/User/Pages/User'
import { CssBaseline } from '@mui/material'

import { USER_TYPES } from '../Consts/UsersTypes'

export const Dashboard = () => {

    const { user } = useContext(UserContext)

    if (user) {
        const role = user.role

        return (
            <>
                <CssBaseline />
                {role === USER_TYPES.ADM && <Admin />}
                {role === USER_TYPES.INV && <DashboardProvider><InvDash /></DashboardProvider>}
                {role === USER_TYPES.USR && <DashboardProvider><User /></DashboardProvider>}
            </>
        )
    }

    return <Navigate to={'/'} />

}
