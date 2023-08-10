import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { AvatarBox } from './AvatarBox'

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
                name: 'Rabih Nabyi Souiden',
                title: 'Estudiante',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Juan Camilo Florez',
                title: 'Estudiante',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Julio Mario Alonso',
                title: 'Estudiante',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            },
            {
                name: 'Gendel Izquierdo Rojas',
                title: 'Estudiante',
                img_url: '',
                descripcion: 'Proyecto de Grado',
                url_social: ''
            }
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

            <Box bgcolor={color1} minHeight={'50vh'} width={'100%'} justifyContent={'center'} pb={10}>

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
            <Stack gap={3}>
                <Typography variant="h4" color="primary.main" textAlign={'center'} mb={2}><strong>{group.title}</strong></Typography>
                <Divider variant='middle' />

                <Stack direction={'row'} gap={10}>

                    {group.persons.map(({ name, title }) =>

                        <Box>
                            <AvatarBox title={name} subtittle={title} />
                        </Box>

                    )}

                </Stack>

            </Stack >

        </Box>
    )

}