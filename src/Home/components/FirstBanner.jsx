import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { motion } from "framer-motion";

export const FirstBanner = () => {
  const texts = {
    cantidad: {
      title: "Personas en riesgo",
      text: "Según la OMS, en 2019, el 99% de la población mundial vivía en lugares donde no se respetaban las Directrices de la OMS sobre la Calidad del Aire.",
    },
    calidad: {
      title: "Material Particulado",
      text: "Uno de los principales contaminantes es el Material Particulado (PM), que es una mezcla de partículas sólidas y líquidas presentes en el aire. Algunas son visibles, como el polvo, el hollín y el humo, mientras que otras solo se pueden detectar con un microscopio electrónico.",
    },
    recomendaciones: {
      title: "Fuentes de PM",
      text: "En las partículas detectables con el microscopio electrónico se encuentran el PM10 (10 micrómetros) y el PM2,5 (2,5 micrómetros). Estas partículas pueden ser inhaladas y acumularse en el sistema respiratorio, especialmente las de 2,5 micras, que llegan a lo más profundo de los pulmones.",
    },
    alertas: {
      title: "Alertas",
      text: "El PM puede provenir de construcciones, caminos sin asfaltar, campos, chimeneas e incendios. Otras partículas se forman en la atmósfera debido a reacciones químicas de contaminantes emitidos por fuentes como centrales eléctricas, industrias y vehículos.",
    },
  };

  return (
    <>
      <Box
        bgcolor={"secondary.light"}
        minHeight={"30vh"}
        display={"grid"}
        sx={{ placeContent: "center" }}
      >
        <Grid container textAlign={"center"} bgcolor={"primary.main"}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack_item
              title={texts.cantidad.title}
              text={texts.cantidad.text}
              delay={0.2}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack_item
              title={texts.calidad.title}
              text={texts.calidad.text}
              delay={0.4}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack_item
              title={texts.recomendaciones.title}
              text={texts.recomendaciones.text}
              delay={0.6}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack_item
              title={texts.alertas.title}
              text={texts.alertas.text}
              delay={0.8}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const Stack_item = ({ title, text, delay = 0 }) => {
  return (
    <motion.div
      whileInView={{ y: [0, -10, -12, 0] }}
      transition={{ delay: delay }}
      viewport={{ once: true }}
    >
      <Box
        component={motion.div}
        bgcolor={"secondary.light"}
        sx={{
          ":hover": {
            backgroundColor: "secondary.main",
          },
        }}
        whileHover={{ y: -10 }}
        transition={{
          bounce: "false",
        }}
        py={2}
        height={"250px"}
      >
        <Typography color={'primary.main'} variant="h5" mb={2}>
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body1" color="initial" textAlign={"justify"} p={2}>
          {text}
        </Typography>
      </Box>
    </motion.div>
  );
};
