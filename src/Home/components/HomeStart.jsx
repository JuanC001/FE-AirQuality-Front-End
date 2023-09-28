import {
  Box,
  Button,
  Fade,
  Grid,
  IconButton,
  Slide,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import { ImgBox } from "./ImgBox";

import { motion, useScroll, useTransform } from "framer-motion";

import { scrollDownTo } from "../hooks/scrollDownTo";
import dotmap from "../../assets/images/mapa.png";
import fnline1 from "../../assets/images/fondo01.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./HomeStart.css";

import AirIcon from "@mui/icons-material/Air";

function ArrowDown(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Fade in={!trigger} appear={false}>
      {children}
    </Fade>
  );
}

export const HomeStart = () => {
  const { scrollYProgress } = useScroll();

  const isMobile = window.innerWidth < 768 ? true : false;


  const left = !isMobile && useTransform(scrollYProgress, [0, 0.5], ["0px", "-1000px"]);
  const right = !isMobile && useTransform(scrollYProgress, [0, 0.5], ["0px", "1000px"]);
  const down = !isMobile && useTransform(scrollYProgress, [0, 0.5], ["0px", "500px"]);
  const opacity = !isMobile && useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const variants = {
    "scale-init": {
      scale: [0, 1.1, 1.2, 1, 1],
    },
    "opacity-line": {
      opacity: [0, 0, 0, 0.5, 0.5],
    },
  };

  return (
    <>
      <Box
        mt={'6vh'}
        height={"100vh"}
        sx={{ overflow: "hidden", position: "relative", pt: 2 }}
        px={2}
      >
        <Grid container sx={{ overflow: "hidden" }} height={'100%'}>
          <Grid item xs={12} md={6} height={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={"flex"}>
              <Box
                margin={"auto"}
                my={"auto"}
                sx={{
                  transition: "all 0.2s ease-in-out",
                  ":hover": {
                    transform: "translateY(5px)",
                    filter: "drop-shadow(10px 10px 5px lightgrey)",
                  },
                }}
              >
                <motion.div
                  variants={variants}
                  animate={"scale-init"}
                  style={{ x: left }}
                  layout
                >
                  <Stack m={"auto"}>
                    <Typography
                      variant="h3"
                      align="center"
                      color={"primary.main"}
                      mb={2}
                      fontSize={{ xs: '5vw', md: '3vw' }}
                    >
                      <strong>Conozcamos nuestro aire</strong>
                    </Typography>
                    <Typography variant="p" align="justify">
                      Conocer la calidad del aire que ingresa a nuestros pulmones debe ser un aspecto por el cual todas las personas debemos preocuparnos. Según la Organización Mundial de la Salud – OMS (2022) se estima que a 2019 la contaminación del aire exterior ocasionó cerca de 4,2 millones de muertes prematuras. Además, si le queremos sumar los efectos de la calidad del aire en interiores la asociación puede llegar a los 6,7 millones de muertes prematuras al año.
                    </Typography>
                    <Box textAlign={"end"} p={3}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={(e) => scrollDownTo("about-us")}
                      >
                        Conocer mas
                      </Button>
                    </Box>
                  </Stack>
                </motion.div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} height={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <motion.div
              variants={variants}
              animate={"scale-init"}
              transition={{ delay: "0.2" }}
              style={{ x: right, height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <ImgBox
                margin={"auto"}
                component={"img"}
                src={dotmap}
                className={"img-dot"}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} mb={16} height={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <motion.div
              variants={variants}
              animate={"scale-init"}
              transition={{ delay: "0.4" }}
              style={{ y: down, opacity: opacity }}
            >
              <Box
                textAlign={"center"}
                sx={{
                  transition: "all 0.2s ease-in-out",
                  ":hover": {
                    transform: "translateY(5px)",
                    filter: "drop-shadow(10px 10px 10px lightgrey)",
                  },
                }}
              >
                <Box p={4} textAlign={"center"}>
                  <AnimatedTitle />
                  <Typography
                    variant="h4"
                    align="center"
                    color={"primary.main"}
                    mb={2}
                  >
                    <strong>Obten beneficios y ventajas</strong>
                  </Typography>
                  <Typography variant="p" align="center">
                    Manten el control de calidad de aire en tu casa.
                  </Typography>
                </Box>
                <ArrowDown>
                  <IconButton
                    aria-label="scroll down"
                    onClick={() => scrollDownTo("about-us")}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </ArrowDown>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      {!isMobile && (
        <>
          <Box
            component={motion.img}
            src={fnline1}
            sx={{
              position: "fixed",
              top: -200,
              rotate: "90deg",
              transform: "scaleX(-1)",
              left: -150,
              opacity: 0.5,
              zIndex: -1,
            }}
            style={{ x: left }}
            variants={variants}
            animate={"opacity-line"}
          />
          <Box
            component={motion.img}
            src={fnline1}
            sx={{
              position: "fixed",
              top: 400,
              rotate: "90deg",
              transform: "scaleX(-1)",
              right: -200,
              opacity: 0.5,
              zIndex: -1,
            }}
            style={{ y: left }}
            variants={variants}
            animate={"opacity-line"}
          />
        </>
      )}
    </>
  );
};

const AnimatedTitle = () => {
  const { scrollYProgress } = useScroll();
  const movinX = useTransform(scrollYProgress, [0, 0.5], ["0px", "2000px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  return (
    <motion.div
      style={{
        x: movinX,
        opacity: opacity,
      }}
    >
      <Typography
        component={motion.h6}
        variant="h6"
        align="center"
        color="secondary.main"
        mb={1}
        alignItems={"center"}
        display="flex"
        justifyContent={"center"}
      >
        <AirIcon />
        <b>Unbosque Air</b>
      </Typography>
    </motion.div>
  );
};
