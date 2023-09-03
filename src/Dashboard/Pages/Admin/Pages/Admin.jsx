import { Box, Grid } from '@mui/material'
import React from 'react'
import { Users } from '../Components/Users'
import { Actions } from '../Components/Actions'

export const Admin = () => {
    return (
        <>

            <Box minHeight={'100vh'} p={1} px={2} width={{
                sx: '90%',
                md: '80%'
            }} mx={'auto'}>
                <Box minHeight={'6vh'} mt={8}>
                    <Actions />
                </Box>

                <Box height={'80vh'} mt={2}>
                    <Users />
                </Box>
            </Box>

        </>
    )
}
