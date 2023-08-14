import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { AvatarBox } from './AvatarBox'

import { AnimatePresence, motion } from 'framer-motion'

import fnd01 from '../../assets/images/fondo02.png'

export const OurTeam = () => {

    const theme = useTheme()
    const color1 = theme.palette.primary.light
    const color2 = theme.palette.secondary.light

    const principals = {
        title: 'Directores',
        persons: [
            {
                name: 'Gustavo Ordoñez',
                title: 'Profesor UEB',
                img_url: '',
                descripcion: 'Descripcion corta',
                url_social: ''
            },
            {
                name: 'Hector Adolfo',
                title: 'Profesor UEB',
                img_url: '',
                descripcion: 'Descripcion corta',
                url_social: ''
            },
            {
                name: 'Laura Cabezas',
                title: 'Profesor UEB',
                img_url: '',
                descripcion: 'Descripcion corta',
                url_social: ''
            }
        ]
    }
    const developers = {
        title: 'Desarrolladores',
        persons: [
            {
                name: 'Rabih Souiden',
                title: 'Ingenieria de Sistemas',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Juan Florez',
                title: 'Ingenieria de Sistemas ',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Julio Alonso',
                title: 'Ingenieria de Sistemas',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
        ]
    }
    const colaborators = {

        title: 'Colaboradores',
        persons: [
            {
                name: 'Daniel Palomino',
                title: 'Estudiante',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Estadistica...',
                title: 'Estudiante',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },

        ]

    }

    return (
        <>
            <Box style={{

                backgroundImage: `linear-gradient(${theme.palette.primary.contrastText} 50%, ${color1})`,
            }} >

                <Box height={'20vh'}>

                    <Typography variant="h3" color="primary.dark" textAlign={'center'} my={3}><strong>Nuestro Equipo</strong></Typography>
                    <Divider variant='middle' />

                </Box>

            </Box>

            <Box minHeight={'50vh'} width={'100%'} pb={10} position={'relative'}>

                <Box bgcolor={color1} width={'100%'} height={'100%'} position={'absolute'} zIndex={-2} />
                <Box component={motion.img} src={fnd01} position={'absolute'} zIndex={-1} width={'100%'} height={800} sx={{ scaleX: '-1', opacity: '0.3' }} whileInView={{ clipPath: ['circle(0% at 0% 100%)', 'circle(150% at 0% 100%)'] }} viewport={{ once: 'true' }} transition={{ duration: 2, delay: 2 }} />

                <DinamycStack group={principals} />
                <DinamycStack group={developers} />
                <DinamycStack group={colaborators} />

            </Box>

        </>
    )
}

const DinamycStack = ({ group }) => {

    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'} pt={2} mb={4}>
            <Stack spacing={3}>
                <Typography variant="h4" color="primary.main" textAlign={'center'} mb={2}><strong>{group.title}</strong></Typography>
                <Divider />
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'center'} spacing={2}>

                    {group.persons.map(({ name, title }) =>

                        <Box display={'flex'} justifyContent={'center'}>
                            <AvatarBox title={name} subtitle={title} />
                        </Box>

                    )}

                </Stack>

            </Stack >

        </Box>
    )

}