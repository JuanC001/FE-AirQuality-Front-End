import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

import { ImgBox } from "./ImgBox";
import { MicroBox } from "./MicroBox";

import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";

import placeholder from "../../assets/images/devicev2.svg";
import fondo from "../../assets/images/fondo02.png";

export const AirControl = () => {
  const [animar, setAnimar] = React.useState(false);

  const wrapperVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      transition: { duration: 1 },
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 2 },
    },

    microBoxAnim: {
      y: [0, 0, -10, 0, 0],
      scale: [1, 1.2, 1.4, 1.2, 1],
    },

    img_initial: {
      y: 0,
    },

    img_anim: {
      y: [0, 0, -20, 0, 0],
      transition: { duration: 2, delay: 0.5 },
    },
  };

  return (
    <Box position={"relative"} zIndex={1} bgcolor={"primary.light"}>
      <Grid container alignItems={"center"} pt={4} pb={4} zIndex={2}>
        <Grid item xs={12} md={6}>
          <Box p={4} id={"about-us"}>
            <Typography variant="h4" align="left" color={"primary.dark"} mb={2}>
              <strong>Manten el control del aire en tu hogar</strong>
            </Typography>
            <Typography
              variant="h6"
              align="justify"
              color={"secondary.contrastText"}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              delectus eveniet reprehenderit quisquam adipisci eligendi ipsam
              unde repellendus, nostrum cupiditate veritatis quae blanditiis
              placeat animi sunt suscipit voluptatibus, impedit rem debitis
              reiciendis odio officiis quidem saepe! Voluptate inventore
              veritatis iusto! Quae quasi aliquid quod consequuntur ullam ipsa
              voluptas blanditiis excepturi dolores! Eius, consequatur odio
              inventore doloremque neque a est sed.
            </Typography>
          </Box>

          <Grid
            container
            columns={15}
            width={"98%"}
            spacing={2}
            p={"auto"}
            m={"auto"}
            justifyContent={"center"}
            display={"flex"}
          >
            <Grid item xs={5} md={3}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <MicroBox
                  component={motion.div}
                  display={"flex"}
                  mx={"auto"}
                  textAlign={"center"}
                  variants={wrapperVariants}
                  animate={animar && "microBoxAnim"}
                  transition={{ delay: "1.2" }}
                >
                  <Stack direction={"column"} m={"auto"} alignItems={"center"}>
                    <OpacityIcon />
                    <Typography variant="h6" textAlign={"center"}>
                      60%
                    </Typography>
                  </Stack>
                </MicroBox>
              </motion.div>
            </Grid>

            <Grid item xs={5} md={3}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <MicroBox
                  component={motion.div}
                  display={"flex"}
                  mx={"auto"}
                  variants={wrapperVariants}
                  animate={animar && "microBoxAnim"}
                  transition={{ delay: "1.4" }}
                >
                  <Stack direction={"column"} m={"auto"} alignItems={"center"}>
                    <ThermostatIcon />
                    <Typography variant="h6" textAlign={"center"}>
                      18°
                    </Typography>
                  </Stack>
                </MicroBox>
              </motion.div>
            </Grid>

            <Grid item xs={5} md={3}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <MicroBox
                  component={motion.div}
                  display={"flex"}
                  mx={"auto"}
                  variants={wrapperVariants}
                  animate={animar && "microBoxAnim"}
                  transition={{ delay: "1.6" }}
                >
                  <Stack direction={"column"} m={"auto"} alignItems={"center"}>
                    <ThermostatIcon />
                    <Typography variant="h6" textAlign={"center"}>
                      30°
                    </Typography>
                  </Stack>
                </MicroBox>
              </motion.div>
            </Grid>

            <Grid item xs={7.5} md={3}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <MicroBox
                  component={motion.div}
                  display={"flex"}
                  mx={"auto"}
                  variants={wrapperVariants}
                  animate={animar && "microBoxAnim"}
                  transition={{ delay: "1.8" }}
                >
                  <Stack direction={"column"} m={"auto"} alignItems={"center"}>
                    <Typography variant="body1" textAlign={"center"}>
                      ppm
                    </Typography>
                    <Typography variant="h6" textAlign={"center"}>
                      28
                    </Typography>
                    <Typography variant="body1" textAlign={"center"}>
                      <strong>PM2.5</strong>
                    </Typography>
                  </Stack>
                </MicroBox>
              </motion.div>
            </Grid>

            <Grid item xs={7.5} md={3}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <MicroBox
                  component={motion.div}
                  display={"flex"}
                  mx={"auto"}
                  variants={wrapperVariants}
                  animate={animar && "microBoxAnim"}
                  transition={{ delay: "2" }}
                >
                  <Stack direction={"column"} m={"auto"} alignItems={"center"}>
                    <Typography variant="body1" textAlign={"center"}>
                      ppm
                    </Typography>

                    <Typography variant="h6" textAlign={"center"}>
                      27
                    </Typography>
                    <Typography variant="body1" textAlign={"center"}>
                      <strong>PM10</strong>
                    </Typography>
                  </Stack>
                </MicroBox>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} textAlign={"center"}>
          <motion.div whileHover={{ y: -10 }}>
            <Box
              margin={"auto"}
              mt={3}
              component={motion.img}
              src={placeholder}
              sx={{ maxWidth: "60%", opacity: "90%", filter: "drop-shadow(0px 0px 10px rgb(164,238,250))" }}
              variants={wrapperVariants}
              animate={animar && "img_anim"}
              transition={{ delay: 2.2 }}
            />
          </motion.div>
        </Grid>
      </Grid>
      <Box
        component={motion.img}
        src={fondo}
        sx={{
          width: "100%",
          height: 500,
          position: "absolute",
          bottom: "0",
          opacity: "40%",
        }}
        zIndex={-1}
        variants={wrapperVariants}
        initial={"initial"}
        animate={animar && "animate"}
        viewport={{ once: true }}
        onVie
      />
      <motion.div onViewportEnter={(e) => setAnimar(true)} />
    </Box>
  );
};
