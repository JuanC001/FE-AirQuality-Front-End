import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

import img01 from '../../assets/images/Imagen_instituto.png'

const text1 = 'El Instituto de Salud y Ambiente de la Universidad El Bosque se ha centrado en abordar los problemas de salud pública relacionados con la mala calidad del aire. Desde 2019, han lanzado la iniciativa "Respirar mejor es posible" con el objetivo de mejorar la investigación sobre los efectos en la salud causados por la contaminación del aire. Su objetivo principal es generar evidencia para identificar los riesgos asociados a las enfermedades causadas por la mala calidad del aire.'
const text2 = 'En la actualidad, el Instituto ha desarrollado un prototipo de Dispositivo de Bajo Costo (DBC) diseñado para medir las partículas de 10 y 2.5 micras en el interior de viviendas. Este dispositivo permitirá llevar a cabo un seguimiento de la calidad del aire en los hogares y establecer conexiones con los síntomas respiratorios de los residentes. Esta etapa inicial representa el primer paso en su enfoque para abordar este problema de salud pública.'


export const FirstPart = () => {
    return (
        <Grid container component={Paper} p={{ xs: 3, md: 10 }} rowGap={3} borderRadius={'15px'}>
            <Grid item xs={12} md={6} >

                <Grid container spacing={2} display={'flex'} alignItems={'center'} my={'auto'}>
                    <Grid item xs={12}>
                        <Typography variant={'h3'} align={"center"} color={'primary.dark'}><b>Respirar Mejor Es Posible</b></Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} textAlign={'justify'}>{text1}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} textAlign={'justify'}>{text2}</Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={12} md={6} display={'flex'} height={'50vh'} justifyContent={'center'} alignItems={'center'}>


                <img src={img01} alt="institute" style={{
                    width: 'fit-content',
                    height: '100%',
                    objectFit: 'cover'
                }} />


            </Grid>
        </Grid>
    )
}
