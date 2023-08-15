import { Box, TextField } from '@mui/material'
import React from 'react'
import { Map } from '../Map'

export const StepTwo = () => {
    return (
        <Box>

            <Box width={'300px'} height={'300px'} mx={'auto'} my={2}>
                <Map />
            </Box>

            <Box>
                <TextField label={'Dirección'} placeholder='Cll123 #45 - 67' fullWidth />
            </Box>

        </Box>
    )
}
