import { Avatar as avs, Box, Stack, styled, Typography, useTheme } from '@mui/material'
import React from 'react'

const Avatar = styled(avs)(({ theme }) => ({

    height: '100%',
    width: '100%'

}))

export const AvatarBox = ({ src, title, subtittle }) => {

    const theme = useTheme()

    return (
        <>
            <Box width={'150px'} height={'150px'} sx={{

                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                border: `2px solid ${theme.palette.secondary.light}`,
                borderRadius: '50%',
                ':hover': {

                    transform: 'translateY(-5px)',
                    filter: 'drop-shadow(5px 10px 10px lightgrey)',

                }

            }}>
                <Avatar src={src}></Avatar>
                <Box position={'relative'} bottom={'50px'} bgcolor={'white'} width={'100%'} height={'40%'} justifyContent={'center'} mx={'auto'} p={1}

                    sx={{
                        border: `2px solid ${theme.palette.secondary.light}`
                    }}

                >
                    <Typography variant="body1" color="initial" textAlign={'center'} >{title}</Typography>
                </Box>
            </Box >
        </>
    )

}
