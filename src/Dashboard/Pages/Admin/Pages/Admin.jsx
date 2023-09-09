import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Users } from '../Components/Users'
import { Actions } from '../Components/Actions'
import { useUsers } from '../../../Hooks/useUsers'

export const Admin = () => {

    const { getAllUsers } = useUsers()
    const [users, setUser] = useState([])
    const [searchingInfo, setSearchingInfo] = useState(false)

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

            <Box minHeight={'100vh'} p={1} px={2} width={{
                sx: '90%',
                md: '80%'
            }} mx={'auto'}>
                <Box minHeight={'6vh'} mt={8}>
                    <Actions getUsers={getUsers} />
                </Box>

                <Box height={'80vh'} mt={2}>
                    <Users users={users} getUsers={getUsers} searchingInfo={searchingInfo} />
                </Box>
            </Box>

        </>
    )
}
