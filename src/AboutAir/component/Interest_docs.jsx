import React from 'react'

import ins from '../../assets/images/ins.png'
import oms from '../../assets/images/oms.png'
import iqair from '../../assets/images/iqair.png'
import min_ambiente from '../../assets/images/min_ambiente.png'
import { Box, Divider, Grid, Link, Paper, Typography } from '@mui/material'

export const Interest_docs = () => {
    return (
        <>
            <Typography variant="h4" color="primary.dark" textAlign={'center'}><b>Documentos de interés</b></Typography>
            <Divider variant='middle' />
            <Grid container gap={1} p={4} >

                <Grid container component={Paper}>
                    <Grid item xs={12} md={4} textAlign={'center'}>
                        <Box component={'img'} src={ins} height={'50px'} />
                    </Grid>
                    <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Typography variant={'body1'} textAlign={'center'}>Carga de Enfermedad Ambiental en Colombia (2018)</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} display={'flex'} alignItems={'center'}>
                        <Link variant={'body1'} textAlign={'center'} href='https://www.ins.gov.co/Direcciones/ONS/Informes/10%20Carga%20de%20enfermedad%20ambiental%20en%20Colombia.pdf'>Click para Ir</Link>
                    </Grid>
                </Grid>

                <Grid container component={Paper}>
                    <Grid item xs={12} md={4} textAlign={'center'}>
                        <Box component={'img'} src={oms} height={'50px'} />
                    </Grid>
                    <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Typography variant={'body1'} textAlign={'center'}>Carga de Enfermedad Ambiental en Colombia (2018)</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} display={'flex'} alignItems={'center'}>
                        <Link variant={'body1'} textAlign={'center'} href='https://iris.who.int/bitstream/handle/10665/345329/9789240034228-eng.pdf?sequence=1&isAllowed=y'>Click para Ir</Link>
                    </Grid>
                </Grid>

                <Grid container component={Paper}>
                    <Grid item xs={12} md={4} textAlign={'center'}>
                        <Box component={'img'} src={iqair} height={'50px'} />
                    </Grid>
                    <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Typography variant={'body1'} textAlign={'center'}>Carga de Enfermedad Ambiental en Colombia (2018)</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} display={'flex'} alignItems={'center'}>
                        <Link variant={'body1'} textAlign={'center'} href='https://www.iqair.com/es/world-air-quality-report'>Click para Ir</Link>
                    </Grid>
                </Grid>

                <Grid container component={Paper}>
                    <Grid item xs={12} md={4} textAlign={'center'}>
                        <Box component={'img'} src={min_ambiente} height={'50px'} />
                    </Grid>
                    <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Typography variant={'body1'} textAlign={'center'}>Carga de Enfermedad Ambiental en Colombia (2018)</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} display={'flex'} alignItems={'center'}>
                        <Link variant={'body1'} textAlign={'center'} href='https://www.ambientebogota.gov.co/plan-aire-2030#:~:text=El%20Plan%20Aire%20es%20la,puedan%20respirar%20un%20aire%20mejor.'>Click para Ir</Link>
                    </Grid>
                </Grid>



            </Grid>
        </>
    )
}
