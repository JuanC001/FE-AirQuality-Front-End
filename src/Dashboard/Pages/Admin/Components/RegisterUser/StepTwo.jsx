import { Box, Button, Grid, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Map } from "../Map";

import { useGeocoding } from "../../../../Hooks/useGeocoding";
import { useRef } from "react";

export const StepTwo = ({ saveData, handleNext, handleBack }) => {
  const [address, setAddress] = useState("");
  const [coords, setCoord] = useState({ lat: 0, lng: 0 });

  const handleSubmit = (e = Event) => {
    e.preventDefault();

    const data = { lat, lng, address };
    saveData(data);
    handleNext();
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container>
          <Box width={"100%"} height={"470px"} mx={"auto"}>
            <Map />
          </Box>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <div></div>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent={"end"}>
            <Button type="submit">Next</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
