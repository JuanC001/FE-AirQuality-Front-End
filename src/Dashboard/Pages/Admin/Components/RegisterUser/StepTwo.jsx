import { Box, Button, Grid, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Map } from "../Map";

import { useGeocoding } from "../../../../Hooks/useGeocoding";
import { useRef } from "react";

import Swal from "sweetalert2";

export const StepTwo = ({ saveData, handleNext, handleBack }) => {

  const [address, setAddress] = useState({
    lat: '',
    lng: '',
    address: ''
  })

  const saveAddress = (itemSave) => {

    setAddress(itemSave)
    console.log(itemSave)

  }

  const handleSubmit = async (e = Event) => {
    e.preventDefault();

    if (address.address.length < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes seleccionar una dirección (Selecciona dando click en el icono de buscar en la lista)',
      })
      return;
    }

    const response = await Swal.fire({
      title: '¿Estas seguro de guardar la calle ' + address.address + '?',
      text: "Verifica en el mapa que el punto que se marca sea correcto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })

    if (!response.isConfirmed) {
      return
    }

    saveData(address);
    handleNext();
  };

  return (
    <>
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
    </>
  );
};
