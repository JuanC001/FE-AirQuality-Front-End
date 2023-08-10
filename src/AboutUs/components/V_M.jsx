import {
  SvgIcon,
  IconButton,
  Icon,
  Grid,
  Stack,
  Divider,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";

import "./V_M.css";

export const V_M = ({ text, icon, title, direction }) => {
  return (
    <>
      <Grid
        container
        textAlign={"center"}
        justifyContent={"center"}
        display={"flex"}
        rowSpacing={2}
        p={2}
        direction={direction}
        minHeight={"30vh"}
      >
        <Grid
          item
          sm={12}
          md={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            component={Paper}
            p={2}
            elevation={1}
            mx={2}
            width={"90%"}
            height={"90%"}
          >
            <Typography className="titleText" variant="h4" color="primary.dark">
              <strong>{title}</strong>
            </Typography>
            <SvgIcon component={icon} sx={{ fontSize: "8vw" }} />
          </Box>
        </Grid>

        <Grid item sm={12} md={10} display={"flex"}>
          <Box width={"90%"} m={"auto"}>
            <Typography variant="body1" color="initial" textAlign={"justify"}>
              {text}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
