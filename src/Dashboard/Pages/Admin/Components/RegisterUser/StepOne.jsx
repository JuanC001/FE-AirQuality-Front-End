import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React from "react";

import { motion } from "framer-motion";
import { useForm } from "../../../../Hooks/useForm";

export const StepOne = ({ handleNext, saveData }) => {
  const { name, deviceId, email, role, city, onInputChange } = useForm({
    name: "",
    deviceId: "",
    email: "",
    role: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, deviceId, email, role, city };
    saveData(data);
    handleNext();
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} position={"relative"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            name="deviceId"
            label={"Dispositivo (ID)"}
            type="number"
            color="secondary"
            value={deviceId}
            onChange={onInputChange}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <TextField
            label={"Nombre completo"}
            type="text"
            required
            fullWidth
            color="secondary"
            value={name}
            onChange={onInputChange}
            name="name"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <TextField
            label={"Correo"}
            type={"email"}
            placeholder="correo@unbosque.edu.co"
            required
            fullWidth
            color="secondary"
            value={email}
            name="email"
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" color="secondary">
              Rol
            </InputLabel>
            <Select
              value={role}
              name="role"
              onChange={onInputChange}
              required
              color="secondary"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rol"
            >
              <MenuItem value={"Usuario"}>Usuario</MenuItem>
              <MenuItem value={"Investigador"}>Investigador</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={8}>
          <TextField
            color="secondary"
            label={"Ciudad"}
            placeholder="Bogotá"
            fullWidth
            type="text"
            value={city}
            name="city"
            onChange={onInputChange}
            required
          />
        </Grid>
      </Grid>

      <Grid container height="20" position="absolute" sx={{ bottom: -50 }}>
        <Grid item xs={6}>
          <Button type=""></Button>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Button type="Submit">Next</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
