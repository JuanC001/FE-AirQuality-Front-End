import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { AvatarBox } from './AvatarBox'

export const OurTeam = () => {

    const theme = useTheme()
    const color1 = theme.palette.primary.light
    const color2 = theme.palette.secondary.light


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

            <Box bgcolor={color1} minHeight={'50vh'} width={'100%'} pb={20} justifyContent={'center'} >

                <Box width={'80%'} mx={'auto'} mb={3}>
                    <Typography variant="h4" color="secondary.main" textAlign={'center'} mb={2}><strong>Directores</strong></Typography>
                    <Divider variant='middle' />
                </Box>

                <Grid container width={'90%'} mx={'auto'} gap={0}>

                    <Grid item xs={6} md={4} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={4} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={4} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                </Grid>

                <Box width={'80%'} mx={'auto'} mb={3} mt={8}>
                    <Typography variant="h4" color="secondary.main" textAlign={'center'} mb={2}><strong>Desarrolladores</strong></Typography>
                    <Divider variant='middle' />
                </Box>

                <Grid container width={'90%'} mx={'auto'} gap={0}>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                </Grid>

                <Box width={'80%'} mx={'auto'} mb={3} mt={8}>
                    <Typography variant="h4" color="secondary.main" textAlign={'center'} mb={2}><strong>Colaboradores</strong></Typography>
                    <Divider variant='middle' />
                </Box>

                <Grid container width={'90%'} mx={'auto'} gap={0}>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                    <Grid item xs={6} md={2} display={'flex'} justifyContent={'center'}>
                        <AvatarBox title={'Persona'} subtittle={'Director'} />
                    </Grid>

                </Grid>

            </Box>

            

        </>
    )
}
