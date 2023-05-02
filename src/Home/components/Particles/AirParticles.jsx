import { Box } from '@mui/material'
import React from 'react'

import './AirParticles.css'
import { useTheme } from '@emotion/react'

export const AirParticles = () => {

    const theme = useTheme()
    const color = theme.palette.primary.dark

    return (
        <Box height={'100%'} sx={{ display: { xs: 'none', md: 'unset' } }}>
            <div className="particles">
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
                <div className="particle" style={{ backgroundColor: `${color}` }}></div>
            </div>
        </Box>
    )
}
