import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Users } from '../Components/Users'
import { Actions } from '../Components/Actions'
import { useUsers } from '../../../Hooks/useUsers'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Devices } from '../Components/Devices'

export const Admin = () => {

    const { getAllUsers } = useUsers()
    const [users, setUser] = useState([])
    const [searchingInfo, setSearchingInfo] = useState(true)
    const [tabValue, setTabValue] = useState(0)

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    }

    const getUsers = async () => {
        setSearchingInfo(true)
        const allUsers = await getAllUsers()
        setUser(allUsers)
        setSearchingInfo(false)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>

            <Box height={'100vh'} paddingTop={3} px={2} maxWidth={'1200px'} mx={'auto'}>
                <Box mt={8}>
                    <Actions getUsers={getUsers} />
                </Box>

                <Box width={'100%'} my={2}>
                    <Tabs value={tabValue} onChange={handleChange} variant='fullWidth'>
                        <Tab label="Usuarios" />
                        <Tab label="Dispositivos" />
                    </Tabs>
                </Box>

                <Box height={'80vh'}>
                    {
                        tabValue === 0 &&
                        <Users users={users} getUsers={getUsers} searchingInfo={searchingInfo} />
                    }
                    {
                        tabValue === 1 &&
                        <Devices />
                    }
                </Box>

            </Box>

        </>
    )
}
