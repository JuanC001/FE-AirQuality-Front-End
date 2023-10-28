import { Box, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { FirstPart } from "../component/FirstPart";

import image from "../../assets/images/image_air_v3.jpg";
import "./AboutAir.css";
import { SecondPart } from "../component/HowItWorks";

import image8 from "../../assets/images/Imagen8.png";

import { motion } from 'framer-motion'
import { ThirdPart } from "../component/ThirdPart";
import { Interest_docs } from "../component/Interest_docs";

import fondo03 from '../../assets/images/fondo03.png'
import { Device } from "../component/Device";
import { AboutPM } from "../component/AboutPM";

const data_extra = 'Según el informe de Calidad del Aire de IQAir en 2022, en lo que respecta al material particulado de 2.5 micrómetros (PM2.5), Colombia se encuentra en la posición número 63 a nivel mundial.'
const data_extra2 = 'En el año 2019, el Instituto Nacional de Salud de Colombia publicó un informe de carga ambiental en donde estableció que el 8% de la mortalidad anual de la nación se relaciona con la calidad del aire, agua y el suelo.'

export const AboutAir = () => {

  const [imageView, setImageView] = useState(false)

  //window.scrollTo(0, 0)
  return (
    <Box bgcolor={'primary.light'} zIndex={3} sx={{ overflowY: 'hidden', overflowX: 'hidden' }} pt={10}>
      <CssBaseline />

      <Box component={motion.div} mb={0} zIndex={2} position={'relative'} initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} display={'flex'} alignItems={'center'}>
        <Box component={motion.img} position={'absolute'} src={fondo03} width={'100vw'} height={'50vh'} initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }} animate={{ opacity: 0.5, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { delay: 0.3, duration: 1 } }} />
        <FirstPart />

      </Box>
      <Box component={motion.div} minHeight={'30vh'}>
        <Device />
      </Box>
      <Box>
        <SecondPart />
      </Box>

      <Box width={'100%'}>
        <AboutPM />
      </Box>

      <Box width={'100%'} component={motion.div} minHeight={'40vh'} py={2} px={{ xs: 5, md: 40 }} display={'flex'} alignItems={'center'} bgcolor={'secondary.main'} sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: '0px 23%',
        overflowY: 'hidden',
      }}

      >
        <motion.div initial={{ y: '200%' }} animate={imageView ? {y: 0} : {}}>
          <Box component={Paper} p={2} mt={2} mb={2} borderRadius={'15px'} height={'80%'} bgcolor={'rgba(255, 255, 255, 0.8)'} >
            <Grid container spacing={2} display={'flex'} alignItems={'center'} my={'auto'}>

              <Grid item xs={12} md={10}>
                <Typography variant={'body1'} align={'center'}>{data_extra2}</Typography>
              </Grid>
              <Grid item xs={12} md={2} height={'20vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box component={'img'} src={image8} height={'100%'} width={'object-fit'} />
              </Grid>

            </Grid>
          </Box>
        </motion.div>
        <motion.div onViewportEnter={() => setImageView(true)}/>

      </Box>
      <Box mt={10}>
        <Interest_docs />
      </Box>
    </Box>
  );
};
