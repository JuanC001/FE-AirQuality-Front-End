import React from 'react'

import { useUsers } from '../../../../Hooks/useUsers'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'

import Swal from 'sweetalert2'
import { Password } from '@mui/icons-material'

export const ConfirmationStep = ({ data, handleClose }) => {

  const { createUser } = useUsers()

  const styleSX = {
    borderBottom: '1px solid',
  }

  const generarContraseña = () => {
    let longitud = 16;
    let caracteres = "abcd%efghijkm*npqrtuvwxyz*-+.ABCDEFGHIJKLMNPQRTUV#WXYZ12346789";
    let pass = "";
    for (let i = 0; i < longitud; i++)
      pass += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );

    return pass;
  }

  const handleSaveUser = async () => {

    Swal.showLoading()
    const userPass = generarContraseña()
    const user = {
      ...data,
      password: userPass
    }

    const result = await createUser(user)

    if (result.result === false) {
      Swal.fire({
        title: 'Error al crear el usuario',
        icon: 'error',
      })
      return
    }

    Swal.fire({
      title: 'Se ha creado el usuario',
      icon: 'success',
    }).then(() => {
      handleClose()
    })
  }

  return (
    <Box height={'100%'} width={'100%'} position={'relative'}>

      <Typography variant="h4" color="initial" textAlign={'center'}>Confirmar Datos</Typography>
      <Divider variant='middle' />

      <Grid container width={'90%'} mx={'auto'} my={5} rowGap={4}>

        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>Nombre:</Typography>
        </Grid>
        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>{data.name}</Typography>
        </Grid>

        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>Email:</Typography>
        </Grid>
        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>{data.email}</Typography>
        </Grid>

        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>Dirección:</Typography>
        </Grid>
        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>{data.address}</Typography>
        </Grid>

        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>Rol:</Typography>
        </Grid>
        <Grid item xs={6} sx={styleSX}>
          <Typography variant="h6" color="initial" textAlign={'center'}>{data.role}</Typography>
        </Grid>

      </Grid>


      {/**<Button color='error' variant='outlined' sx={{ position: 'absolute', bottom: '10%', left: '10%' }}>
        Cancelar
      </Button>
      */}
      <Button color='success' variant='outlined' sx={{ position: 'absolute', bottom: '10%', right: '10%' }} onClick={handleSaveUser}>
        Crear Usuario
      </Button>


    </Box>
  )
}
