import styled from '@emotion/styled';
import { Box, Button, Checkbox, Divider, Stack, TextField, TextareaAutosize, Typography, useTheme } from '@mui/material'
import React from 'react'

export const ContactUs = () => {

  const theme = useTheme()

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'primary.dark',
    },

    '& .MuiInputLabel-root': {

      color: 'primary.dark'

    },

    '& .MuiInputBase-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'primary.dark',
        color: 'primary.dark',

      },
      '&:hover fieldset': {
        borderColor: 'primary.dark',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.dark',
      },
    },
  });

  return (
    <Box minHeight={'80vh'} bgcolor={theme.palette.secondary.light} py={5}>

      <Box width={'80%'} mx={'auto'} mb={3}>
        <Typography variant="h4" color="primary.dark" textAlign={'center'} mb={2}><strong>Contactanos</strong></Typography>
        <Divider variant='middle' />
      </Box>

      <Box width={'80%'} justifyContent={'center'} mx={'auto'} my={6}>
        <Typography variant="body1" color="inherit" width={'80%'} mx={'auto'}>
          Si está interesado en conocer más acerca de nuestros proyectos, o tiene alguna idea que pueda colaborar en dar solución a las problemáticas de calidad del aire y necesitas apoyo,  por favor escríbenos y déjanos tus datos, te estaremos contactando lo más pronto posible.

        </Typography>
      </Box>

      <Box display={'flex'} justifyContent={'center'}>
        <Box width={'90%'} mx={'auto'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
          <Stack gap={4} width={'80%'} mx={'auto'} mb={3}>
            <CssTextField label={'Nombres'} variant='outlined' />
            <CssTextField label={'Correo'} />
            <CssTextField label={'Telefono'} />
            <CssTextField label={'Comentarios'} multiline rows={5} />
            <Stack display={'flex'} direction={'row'} alignItems={'center'}>
              <Checkbox />
              <Typography variant="body1" color="inherit">
                Autoriza el tratamiento de los datos personales suministrados conforme a la ley 1581 de 2012 de protección de datos personales.

              </Typography>
            </Stack>
          </Stack>
          <Button size='medium' variant='contained' color='secondary'>Enviar</Button>

        </Box>
      </Box>
    </Box>
  )
}
