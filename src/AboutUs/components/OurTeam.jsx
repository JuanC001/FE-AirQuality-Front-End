import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { AvatarBox } from './AvatarBox'

import { AnimatePresence, motion } from 'framer-motion'

import fnd01 from '../../assets/images/fondo02.png'

import jflorez from '../../assets/PersonalImages/1681930410385.jpeg'
import rbih from '../../assets/PersonalImages/rbhs.png'
import jalon from '../../assets/PersonalImages/jalons.jpg'

import gvt from '../../assets/PersonalImages/gvt.png'
import hrueda from '../../assets/PersonalImages/hrueda.jpg'
import lcabezas from '../../assets/PersonalImages/lcabezas.jpg'
import gizquierdo from '../../assets/PersonalImages/gizquierdo.jpg'
import hguarnizo from '../../assets/PersonalImages/hguarnizo.jpg'
import smartinez from '../../assets/PersonalImages/smartinez.jpg'
import vgil from '../../assets/PersonalImages/vgil.jpg'
import lgamba from '../../assets/PersonalImages/lgamba.jpg'
import srodriguez from '../../assets/PersonalImages/srodriguez.jpg'
import larias from '../../assets/PersonalImages/larias.jpg'
import dramos from '../../assets/PersonalImages/dramos.jpg'
import erodriguez from '../../assets/PersonalImages/erodriguez.jpg'
import ktorres from '../../assets/PersonalImages/ktorres.jpeg'
import jrojas from '../../assets/PersonalImages/jrojas.jpeg'
import hcopete from '../../assets/PersonalImages/hcopete.jpg'
import dgarcia from '../../assets/PersonalImages/dgarcia.jpg'
import cramirez from '../../assets/PersonalImages/cramirez.jpg'
import mprieto from '../../assets/PersonalImages/mprieto.jpg'
import dpalomino from '../../assets/PersonalImages/dpalomino.jpg'

export const OurTeam = () => {

    const theme = useTheme()
    const color1 = theme.palette.primary.light
    const color2 = theme.palette.secondary.light

    const principals = {
        title: 'Directores',
        persons: [
            {
                name: 'Gustavo Ordoñez',
                title: 'Investigador Principal',
                img_url: gvt,
                descripcion: 'Descripcion corta',
                url_social: ''
            },
            {
                name: 'Hector Rueda',
                title: 'Investigador',
                img_url: hrueda,
                descripcion: 'Descripcion corta',
                url_social: ''
            },
            {
                name: 'Laura Cabezas',
                title: 'Investigadora',
                img_url: lcabezas,
                descripcion: 'Descripcion corta',
                url_social: ''
            }
        ]
    }

    const electronics = {

        title: 'Programa Ingeniería Electrónica',
        persons: [

            {
                name: 'Gendelfav Izquierdo',
                title: 'Ingeníeria Electronica',
                img_url: gizquierdo,

            },
            {
                name: 'Daniel Palomino',
                title: 'Ingeníeria Electronica',
                img_url: dpalomino,

            },
            {
                name: 'Hector Guarnizo',
                title: 'Ingeníeria Electronica',
                img_url: hguarnizo,

            }

        ]

    }

    const ambiental = {

        title: 'Programa de Ingeníeria Ambiental',
        persons: [

            {
                name: 'Sofia Martinez',
                title: 'Ingeníeria Ambiental',
                img_url: smartinez,
            },
            {
                name: 'Verónica Gil',
                title: 'Ingeníeria Ambiental',
                img_url: vgil,
            },
            {
                name: 'Lina Gamba',
                title: 'Ingeníeria Ambiental',
                img_url: lgamba,
            },
            {
                name: 'Sebastian Rodriguez',
                title: 'Ingeníeria Ambiental',
                img_url: srodriguez,
            },
            {
                name: 'Luisa Arias',
                title: 'Ingeníeria Ambiental',
                img_url: larias,
            }

        ]

    }

    const mathematiques = {

        title: 'Programa Matemáticas y Estadistica',

        persons: [

            {
                name: 'David Ramos',
                title: 'Matemáticas y Estadistica',
                img_url: dramos,
            },
            {
                name: 'Emiliano Rodríguez',
                title: 'Matemáticas y Estadistica',
                img_url: erodriguez,
            },
            {
                name: 'Karen Torres',
                title: 'Matemáticas y Estadistica',
                img_url: ktorres,
            },
            {
                name: 'Juan Rojas',
                title: 'Matemáticas y Estadistica',
                img_url: jrojas,
            }

        ]

    }

    const coInvestigadores = {
        title: 'Co-Investigadores',
        persons: [
            {
                name: 'Hommy Copete',
                title: 'Facultad de Medicina',
                img_url: hcopete,
            },
            {
                name: 'Daniel García',
                title: 'Diseño Industrial',
                img_url: dgarcia,
            },
            {
                name: 'Camilo Ramirez',
                title: 'Diseño Industrial',
                img_url: cramirez,
            },
            {
                name: 'Mario Prieto',
                title: 'Informática Biomédica',
                img_url: mprieto,
            },

        ]
    }

    const developers = {
        title: 'Desarrolladores',
        persons: [
            {
                name: 'Rabih Souiden',
                title: 'Ingeníeria de Sistemas',
                img_url: rbih,
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Juan Florez',
                title: 'Ingeníeria de Sistemas ',
                img_url: jflorez,
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Julio Alonso',
                title: 'Ingeníeria de Sistemas',
                img_url: jalon,
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
                <DinamycStack group={coInvestigadores} />
                <DinamycStack group={developers} />
                <DinamycStack group={electronics} />
                <DinamycStack group={ambiental} />
                <DinamycStack group={mathematiques} />

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

                    {group.persons.map(({ name, title, img_url }) =>

                        <Box display={'flex'} justifyContent={'center'}>
                            <AvatarBox title={name} subtitle={title} src={img_url} />
                        </Box>

                    )}

                </Stack>

            </Stack >

        </Box>
    )

}