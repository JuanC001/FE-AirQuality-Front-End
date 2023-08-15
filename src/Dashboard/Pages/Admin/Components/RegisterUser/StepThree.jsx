import { Box, Stack, TextField } from '@mui/material'
import React from 'react'

export const StepThree = () => {
  return (
    <div>
        <Stack gap={3}>

            <TextField type='password' label='Cree una contraseña' e/>
            <TextField type='password' label='Repite la contraseña'/>

        </Stack>
    </div>
  )
}
