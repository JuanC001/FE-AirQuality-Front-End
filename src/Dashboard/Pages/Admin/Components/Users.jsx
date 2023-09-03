import { Box, Button, Grid, Paper, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import './User.css'
import { useUsers } from '../../../Hooks/useUsers'
import { IndividualUser } from './IndividualUser'

const SkeletonTemplate = () => {

    return (

        <Box height={'100%'} width={'100%'}>
            <Grid container>

                <Grid item xs={12} md={3}>
                    <Skeleton variant={'text'} />
                    <Skeleton variant={'text'} />

                </Grid>

                <Grid item xs={12} md={3}>

                    <Skeleton variant={'text'} />
                    <Skeleton variant={'text'} />

                </Grid>

                <Grid item xs={12} md={3} textAlign={'center'}>

                    <Skeleton variant={'text'} />
                    <Skeleton variant={'text'} />

                </Grid>

                <Grid item xs={12} md={3} display={'flex'} justifyContent={'center'}>

                    <Stack gap={1} width={'100px'}>
                        <Skeleton variant={'text'} />
                        <Skeleton variant={'text'} />
                    </Stack>
                </Grid>

            </Grid>

        </Box>
    )

}

export const Users = () => {

    const { getAllUsers } = useUsers()

    const [users, setUser] = useState([])
    const [searchingInfo, setSearchingInfo] = useState(false)

    const getUsers = async () => {
        const allUsers = await getAllUsers()
        setUser(allUsers)
        setSearchingInfo(false)
    }

    useEffect(() => {
        setSearchingInfo(true)
        getUsers()

    }, [])

    return (
        <Box component={Paper} elevation={6} height={'100%'} borderRadius={5} mt={2} display={'flex'} alignItems={'center'}>

            <Box className={'usersBox'} width={'100%'} height={'90%'} bgcolor={'white'} borderRadius={'20px'} sx={{ overflowY: 'scroll' }}>

                <Box>

                    {
                        searchingInfo &&
                        Array.from(Array(20).keys()).map((item) => (
                            <SkeletonTemplate key={item} />
                        ))
                    }

                    {users.map((user) => (
                        <IndividualUser key={user.email} user={user} />
                    ))}

                </Box>

            </Box>

        </Box>
    )
}
