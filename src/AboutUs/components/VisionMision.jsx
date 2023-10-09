import { Box, Grid, Paper, Slide } from '@mui/material'
import React from 'react'
import { CardVM } from './CardVM'
import { V_M } from './V_M'

import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const InsideGrid = () => {

    const vision = 'De forma general, la salud de las personas está determinada en gran parte por el entorno que lo rodea y con el cual tiene interacción, aspectos como la calidad del agua, la calidad de los alimentos, el acceso a servicios de saneamiento básico, las enfermedades transmitidas por vectores, son algunas de las categorías de interés en las que el Instituto de Salud y Ambiente trabaja. No obstante, una de las principales problemáticas de gran interés para la salud pública, es el relacionado con la calidad del aire. El instituto de Salud y ambiente ha trazado como prioritario esta problemática de salud ambiental y tiene la visión de aportar desde diferentes miradas técnicas de diferentes profesiones, soluciones innovadoras y tecnológicas que mejoren la investigación y el desarrollo de medidas que ayuden a concienciar a la ciudadanía sobre la importancia de avanzar en gestiones, programas o proyectos que mejoren la calidad del aire que se respira. Para el 2025, esperamos ser un actor y socio clave en las discusiones y toma de decisiones que diferentes organizaciones públicas y privadas abordan sobre esta problemática.'
    const mision = 'El Instituto de Salud y Ambiente es un grupo interdisciplinario interesado en analizar la relación entre la salud y el ambiente por medio de la ejecución de proyectos de investigación que mejoren la calidad de vida de las comunidades urbanas y rurales. Entre las problemáticas de salud ambiental, uno de los puntos priorizados es el de la calidad del aire y sus efectos en la salud de las personas. Como parte de nuestra misión en torno a esta  temática, el instituto se ha trazado como misión brindar conocimiento sobre el impacto negativo de los diferentes contaminantes del aire en la salud de las personas, el desarrollo de nuevas tecnologías de bajo costo que permitan medir la contaminación de aire, y a la incorporación de la ciudadanía en proyectos de investigación y acciones de gobernanza de la calidad del aire, que puedan aportar al conjunto de soluciones trazadas por los entes públicos e iniciativas privadas.'

    return (
        <>
            <Grid container columnSpacing={3} rowSpacing={3} rowGap={5} mb={8}>
                <Slide in={true} direction='left'>
                    <Grid item xs={12}>
                        <CardVM component={Paper} elevation={6} display={'flex'} justifyContent={'center'}>
                            <V_M text={vision} icon={VisibilityIcon} title={'Nuestra Visión'} />
                        </CardVM>
                    </Grid>
                </Slide>
                <Slide in={true} direction='right'>
                    <Grid item xs={12}>
                        <CardVM component={Paper} elevation={6} display={'flex'} justifyContent={'center'}>
                            <V_M text={mision} icon={TrendingUpIcon} title={'Nuestra Misión'} direction={'row-reverse'} />
                        </CardVM>
                    </Grid>
                </Slide>
            </Grid>
        </>
    )
}

export const VisionMision = () => {


    return (
        <Box px={3} width={'90%'} display={'flex'} justifyContent={'center'} mx={'auto'}>
            <InsideGrid />
        </Box>
    )
}
