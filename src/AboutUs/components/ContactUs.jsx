import styled from '@emotion/styled';
import { Box, Button, Divider, Stack, TextField, TextareaAutosize, Typography, useTheme } from '@mui/material'
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis accusantium ad nobis corporis assumenda dolore veritatis ex, illo, nostrum mollitia earum autem eius. Reprehenderit sint ea voluptatem, non et dolorem officiis qui debitis excepturi facilis, eum distinctio? Expedita, et?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis accusantium ad nobis corporis assumenda dolore veritatis ex, illo, nostrum mollitia earum autem eius. Reprehenderit sint ea voluptatem, non et dolorem officiis qui debitis excepturi facilis, eum distinctio? Expedita, et?
        </Typography>
      </Box>

      <Box display={'flex'} justifyContent={'center'}>
        <Box width={'90%'} mx={'auto'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
          <Stack gap={4} width={'80%'} mx={'auto'} mb={3}>
            <CssTextField label={'Nombres'} variant='outlined' />
            <CssTextField label={'Correo'} />
            <CssTextField label={'Telefono'} />
            <CssTextField label={'Comentarios'} multiline rows={5}/>
          </Stack>
          <Button size='medium' variant='contained' color='secondary'>Enviar</Button>

        </Box>
      </Box>
    </Box>
  )
}
