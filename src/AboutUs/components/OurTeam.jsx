import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { AvatarBox } from './AvatarBox'

export const OurTeam = () => {

    const theme = useTheme()
    const color1 = theme.palette.primary.light
    const color2 = theme.palette.secondary.main


    return (
        <>
            <Box style={{

                backgroundImage: `linear-gradient(${theme.palette.primary.contrastText} 50%, ${color1})`,
            }} >

                <Box height={'20vh'}>

                    <Typography variant="h3" color="primary.main" textAlign={'center'} my={3}><strong>Nuestro Equipo</strong></Typography>
                    <Divider variant='middle' />

                </Box>

            </Box>

            <Box bgcolor={color1} minHeight={'50vh'} width={'100%'} pb={2}>

                <Box width={'80%'} mx={'auto'} mb={3}>
                    <Typography variant="h4" color="secondary.main" textAlign={'center'} mb={2}><strong>Directores</strong></Typography>
                    <Divider variant='middle' />
                </Box>

                <Stack direction={'row'} gap={5} justifyContent={'center'} mb={5}>

                    <AvatarBox title={'Gustavo'} />
                    <AvatarBox title={'Hector'} />
                    <AvatarBox title={'Laura'} />
                </Stack>

                <Box width={'80%'} mx={'auto'} mb={3}>
                    <Typography variant="h4" color="secondary.main" textAlign={'center'} mb={2}><strong>Desarrolladores</strong></Typography>
                    <Divider variant='middle' />
                </Box>

                <Stack direction={'row'} gap={5} justifyContent={'center'} mb={3}>
                    <AvatarBox title={'Juan'} />
                    <AvatarBox title={'Julio'} />
                    <AvatarBox title={'Rabih'} />
                    <AvatarBox title={'Gendel'} />
                    <AvatarBox title={'Laura'} />
                </Stack>

                <Box width={'80%'} mx={'auto'} mb={3}>
                    <Typography variant="h4" color="secondary.main" textAlign={'center'} mb={2}><strong>Colaboradores</strong></Typography>
                    <Divider variant='middle' />
                </Box>

                <Stack direction={'row'} gap={5} justifyContent={'center'}>
                    <AvatarBox title={'X'} />
                    <AvatarBox title={'Y'} />
                    <AvatarBox title={'Z'} />
                    <AvatarBox title={'X'} />
                    <AvatarBox title={'Z'} />
                </Stack>
            </Box>

            <Box style={{

                backgroundImage: `linear-gradient(${color1} 50%, ${color2})`,
            }} >

                <Box height={'20vh'}>

                </Box>

            </Box>

        </>
    )
}
