import React, { useContext } from 'react'
import { UserContext } from '../Global/Context/UserContext'
import { Dashboard as InvDash } from './Pages/Investigator/Pages/Dashboard'
import { Navigate } from 'react-router-dom'
import { DashboardProvider } from './Context/DashboardProvider'

export const Dashboard = () => {

    const { user } = useContext(UserContext)
    if (user) {
        const role = user.role

        const USER_TYPES = {

            INV: 'Investigador',
            ADM: 'Admin',
            USR: 'User'

        }

        return (
            <>
                <DashboardProvider>
                    {role === USER_TYPES.INV && <InvDash />}
                </DashboardProvider>
            </>
        )
    }

    return <Navigate to={'/'} />

}
