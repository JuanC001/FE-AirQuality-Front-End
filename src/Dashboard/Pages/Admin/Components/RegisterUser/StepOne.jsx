import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

export const StepOne = () => {
    return (

        <Box width={'100%'} height={'100%'}>

            <Grid container spacing={1}>

                <Grid item xs={12} md={4}>

                    <TextField label={'Dispositivo (ID)'} fullWidth />

                </Grid>

                <Grid item xs={12} md={8}>

                    <TextField label={'Nombre completo'} fullWidth />

                </Grid>

                <Grid item xs={12} md={8}>

                    <TextField label={'Correo'} placeholder='correo@unbosque.edu.co' fullWidth />

                </Grid>

                <Grid item xs={12} md={4}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <MenuItem value={'Usuario'}>Usuario</MenuItem>
                            <MenuItem value={'Investigador'}>Investigador</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

            </Grid>

        </Box>

    )
}
