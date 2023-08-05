import { Box, Grid } from '@mui/material'
import React from 'react'
import { Users } from '../Components/Users'
import { Actions } from '../Components/Actions'

export const Admin = () => {
    return (
        <>

            <div className='blur_effect'>
                <Box minHeight={'100vh'} bgcolor={'secondary.light'} p={1} px={2}>
                        <Box minHeight={'6vh'} mt={8}>
                            <Actions />
                        </Box>

                        <Box height={'80vh'} mt={2}>
                            <Users />
                        </Box>
                </Box>
            </div>

        </>
    )
}
