import { Box, Typography, Grid, Divider, Slide } from "@mui/material";
import React from "react";

import "./Who.css";
import { AirParticles } from "../../Home/components/Particles/AirParticles";



export const Who = () => {
  return (
    <Box width={"75%"} mx={"auto"} position={"relative"}>
      <Slide in={true}>
        <Grid container spacing={1} rowGap={3}>
          <Grid item xs={12} md={4} textAlign={"center"}>
            <Box className="texts" width={"90%"}>
              <Typography variant="h2" color="primary.dark" fontSize={{ xs: '10vw', sm: '5vw', md: '3vw' }}>
                <strong>¿Quienes Somos?</strong>
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant="body1"
              color="initial"
              textAlign={"justify"}
              px={2}
              alignItems={"center"}
            >
              El Instituto de Salud y Ambiente (ISA) es un grupo interdisciplinario de profesionales, adscrito a la vicerrectoría de investigaciones de la Universidad El Bosque, con interés en el análisis de la relación entre la salud y el ambiente en contextos urbanos y rurales, mediante la formulación y ejecución de proyectos de investigación básica y aplicada; con el propósito de contribuir con la formación de recurso humano y promover el mejoramiento de la calidad de vida de las comunidades, aportándoles herramientas para que fortalezcan su capacidad de gestión, acorde a su cultura y las problemáticas de sus territorios. A su vez, el Instituto de Salud y Ambiente busca ampliar y posicionar el conocimiento en temas ambientales y problemáticas en salud pública para motivar el diseño de acciones de promoción y prevención a nivel local y nacional.

            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Divider variant="middle" orientation="horizontal" />
            </Box>
          </Grid>
        </Grid>
      </Slide>

    </Box>
  );
};
