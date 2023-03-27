import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import { InvestigatorDashboard } from './Investigator/pages/InvestigatorDashboard'
import { UserContext } from '../Global/Context/UserContext'
import { Navigate } from 'react-router-dom'
import { DashboardProvider } from './Context/DashboardProvider'

export const Dashboard = () => {

    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            <DashboardProvider>
                {
                    user.role === 'Investigador' && <InvestigatorDashboard />
                }

                {
                    user.role === 'user' && <InvestigatorDashboard />
                }

                {
                    user.role === 'admin' && <InvestigatorDashboard />
                }
            </DashboardProvider>
        </>
    )
}
