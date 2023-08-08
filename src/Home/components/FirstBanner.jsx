import { Box, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";

import { motion } from "framer-motion";

export const FirstBanner = () => {
  const texts = {
    cantidad: {
      title: "Cantidad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas?",
    },
    calidad: {
      title: "Calidad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas?",
    },
    recomendaciones: {
      title: "Recomendaciones",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas?",
    },
    alertas: {
      title: "Alertas",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas?",
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
      >
        <Typography variant="h5" mb={2}>
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body1" color="initial" textAlign={"justify"} p={2}>
          {text}
        </Typography>
      </Box>
    </motion.div>
  );
};
