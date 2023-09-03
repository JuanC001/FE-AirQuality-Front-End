import { Box, Button, Grid, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Map } from "../Map";

import { useGeocoding } from "../../../../Hooks/useGeocoding";
import { useRef } from "react";

import { motion } from 'framer-motion'

import Swal from "sweetalert2";

export const AddressInformation = ({ saveData, handleNext, handleBack }) => {

  const [data, setData] = useState({})

  const saveAddress = (itemSave) => {

    setData(itemSave)

  }

  const handleSubmit = async (e = Event) => {
    e.preventDefault();

    if (data.length < 1 || data.address === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes seleccionar una dirección (Selecciona dando click en el icono de buscar en la lista)',
      })
      return;
    }

    const response = await Swal.fire({
      title: '¿Estas seguro de guardar la calle ' + data.address + '?',
      text: "Verifica en el mapa que el punto que se marca sea correcto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })

    if (!response.isConfirmed) {
      return
    }

    saveData(data);
    handleNext();
  };

  return (
    <>
      <Box
        component={motion.div}
        height="100%"
        width="100%"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        key="steptwo"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container>
            <Box width={"100%"} height={"470px"} mx={"auto"}>
              <Map saveAddress={saveAddress} />
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
      </Box>
    </>
  );
};
