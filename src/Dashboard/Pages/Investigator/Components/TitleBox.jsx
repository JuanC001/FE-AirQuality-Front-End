import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

export const TitleBox = ({ title }) => {
    return (
        <Box>

            <Typography variant="h5" color="initial"><strong>{title}</strong></Typography>
            <Divider variant='middle' />

        </Box>
    )
}
