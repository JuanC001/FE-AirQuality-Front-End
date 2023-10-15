import { Box, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FirstPart } from "../component/FirstPart";

import image from "../../assets/images/image_air_v3.jpg";
import "./AboutAir.css";
import { SecondPart } from "../component/SecondPart";

import image8 from "../../assets/images/Imagen8.png";
import iqair from "../../assets/images/iqair.jpeg";

import { motion } from 'framer-motion'
import { ThirdPart } from "../component/ThirdPart";
import { Interest_docs } from "../component/Interest_docs";

const data_extra = 'Según el informe de Calidad del Aire de IQAir en 2022, en lo que respecta al material particulado de 2.5 micrómetros (PM2.5), Colombia se encuentra en la posición número 63 a nivel mundial.'
const data_extra2 = 'En el año 2019, el Instituto Nacional de Salud de Colombia publicó un informe de carga ambiental en donde estableció que el 8% de la mortalidad anual de la nación se relaciona con la calidad del aire, agua y el suelo.'

export const AboutAir = () => {
  //window.scrollTo(0, 0, { behavior: 'smooth' })
  return (
    <Box bgcolor={'primary.light'} zIndex={3} sx={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <CssBaseline />

      <Box component={motion.div} position={'relative'} height={{ xs: '20vh', md: '50vh' }} width={'100%'} initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0 }}>
        <Box position={'absolute'} zIndex={1}>
          <img src={image} alt="background" className="img-air" />
        </Box>
      </Box>

      <Box component={motion.div} mb={0} px={2} zIndex={2} position={'relative'} initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>

        <FirstPart />

      </Box>
      <Box>
        <SecondPart />
      </Box>

      <Box width={'100%'} minHeight={'20vh'} px={{ xs: 5, md: 40, overflowY: 'hidden' }}>
        <Box component={Paper} p={2} mt={2} mb={2} borderRadius={'15px'}>
          <Typography variant={'h4'} align={'center'} color={'primary.dark'}><b>¿Sabías que?</b></Typography>
          <Grid container height={'20vh'}>
            <Grid item xs={2} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Box component={motion.img} initial={{ y: '500' }} whileInView={{ y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} src={iqair} height={'100%'} />
            </Grid>
            <Grid item xs={10} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Typography component={motion.p} initial={{ y: '500' }} whileInView={{ y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} variant={'body1'} align={'center'}>{data_extra}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box px={10}>
        <ThirdPart />
      </Box>

      <Box width={'100%'} minHeight={'20vh'} py={2} px={{ xs: 5, md: 40 }} bgcolor={'secondary.main'}>
        <Box component={Paper} p={2} mt={2} mb={2} borderRadius={'15px'}>
          <Grid container spacing={2} display={'flex'} alignItems={'center'} my={'auto'}>

            <Grid item xs={12} md={10}>
              <Typography variant={'body1'} align={'center'}>{data_extra2}</Typography>
            </Grid>
            <Grid item xs={12} md={2} height={'20vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Box component={'img'} src={image8} height={'100%'} width={'object-fit'} />
            </Grid>

          </Grid>
        </Box>
      </Box>
      <Box mt={10}>
        <Interest_docs />
      </Box>
    </Box>
  );
};
