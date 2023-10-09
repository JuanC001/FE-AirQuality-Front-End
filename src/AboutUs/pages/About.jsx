import {
  Box,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { ContactUs } from "../components/ContactUs";
import { CardVM } from "../components/CardVM";
import { V_M } from "../components/V_M";

import { motion } from "framer-motion";
import fnd03 from "../../assets/images/fondo03.png";

import { Who } from "../components/Who";
import { VisionMision } from "../components/VisionMision";
import { OurTeam } from "../components/OurTeam";
import { WhatWeDo } from "../components/WhatWeDo";

export const About = () => {
  window.scrollTo(0, 0, { behavior: 'smooth' })

  return (
    <>
      <CssBaseline />
      <Box pt={10} sx={{ overflow: 'hidden' }}>
        <Box
          minHeight={"50vh"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          zIndex={-2}
        >
          <Who />
          <Box
            component={motion.img}
            position={"absolute"}
            src={fnd03}
            height={"500px"}
            width={"100%"}
            sx={{
              top: "10%",
              left: 0,
              opacity: 0.3,
              transformOrigin: "0% 0%",
            }}
            zIndex={-1}
            animate={{ clipPath: ['circle(0% at 0% 100%)', 'circle(150% at 0% 100%)'] }}
            transition={{ duration: 4 }}
          />
        </Box>

        <Box display={"flex"} minHeight={"50vh"} mb={5}>
          <VisionMision />
          <Box
            component={Paper}
            elevation={0}
            height={"100%"}
            zIndex={"10"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          ></Box>
        </Box>

        <WhatWeDo />

        <OurTeam />

        <ContactUs />
      </Box>
    </>
  );
};
