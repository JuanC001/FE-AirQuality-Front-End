import { Box, Stack, TextField, Grid, Button } from "@mui/material";
import React from "react";
import { useForm } from "../../../../Hooks/useForm";

export const StepThree = ({ saveData, handleNext }) => {
  const { password, password2, onInputChange } = useForm({
    password: "",
    password2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside");
    if (password !== password2) {
      return;
    }

    saveData({ password });
    handleNext();
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} bgcolor={'grey'}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            type="password"
            label="Cree una contraseña"
            name="password"
            fullWidth
            required
            value={password}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs="12">
          <TextField
            type="password"
            label="Repite la contraseña"
            name="password2"
            fullWidth
            required
            value={password2}
            onChange={onInputChange}
          />
        </Grid>
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
  );
};
