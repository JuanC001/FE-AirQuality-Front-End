import { Box, Stack, TextField, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { motion } from 'framer-motion'
import Swal from "sweetalert2";

export const CreatePassword = ({ saveData, handleNext, data }) => {

  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const generarContraseña = () => {
    let longitud = 16;
    let caracteres = "abcd%efghijkm*npqrtuvwxyz*-+.ABCDEFGHIJKLMNPQRTUV#WXYZ12346789";
    let pass = "";
    for (let i = 0; i < longitud; i++)
      pass += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );

      setPassword(pass)
      setPassword2(pass)

    return pass;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
      return;
    }

    saveData({ password });
    handleNext();
  };

  return (

    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      key="stepthree"
    >
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button onClick={generarContraseña}>Generar contraseña</Button>
      </Box>
      <Box component={"form"} onSubmit={handleSubmit} display={'grid'} justifyContent={'center'}>
        <Grid container spacing={3} my={1}>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Cree una contraseña"
              name="password"
              fullWidth
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Repite la contraseña"
              name="password2"
              fullWidth
              required
              value={password2}
              onChange={e => setPassword2(e.target.value)}
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
    </motion.div>

  );
};
