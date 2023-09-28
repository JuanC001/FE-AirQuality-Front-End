import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export const Quality = () => {

    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" size={100} {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Typography variant="body1" component="div" color="text.secondary">
                        <strong>
                            {`${Math.round(props.value)}%`}
                        </strong>
                    </Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'90%'}>

            <CircularProgressWithLabel value={50} />

        </Box>
    )
}
