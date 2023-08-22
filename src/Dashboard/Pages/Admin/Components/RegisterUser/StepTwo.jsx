import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Map } from "../Map";

export const StepTwo = ({ saveData, handleNext, handleBack }) => {
  const [address, setAddress] = useState("");

  //TODO
  // Convertir una direccion a un punto lat long
  const transformAddress = (dir) => {
    const lat = 1;
    const lng = 2;
    return { lat, lng };
  };

  const handleSubmit = (e = Event) => {
    e.preventDefault();
    const { lat, lng } = transformAddress(address);

    const data = { lat, lng, address };
    saveData(data);
    handleNext();
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container>
          <Box width={"100%"} height={"300px"} mx={"auto"} my={2} >
            <Map />
          </Box>

          <TextField
            label={"Dirección"}
            placeholder="Cll123 #45 - 67"
            fullWidth
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
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
