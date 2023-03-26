import React from 'react'
import Typography from '@mui/material/Typography'
import { InvestigatorDashboard } from './Investigator/pages/InvestigatorDashboard'

export const Dashboard = () => {

    const role = 'investigator'

    return (
        <>

            {
                role === 'investigator' && <InvestigatorDashboard />
            }

            {
                role === 'user' && <InvestigatorDashboard />
            }

            {
                role === 'admin' && <InvestigatorDashboard />
            }

        </>
    )
}
