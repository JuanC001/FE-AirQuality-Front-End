import { Box, Grid, CssBaseline,  Slide, Fade } from '@mui/material'

import './Login.css'
import { LoginForm } from '../components/LoginForm';

export const Login = () => {

  return (

    <>
      <Fade in={true}>

        <Box component={'main'} sx={{ backgroundImage: 'url(/imgf.png)', backgroundColor: 'primary.dark', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Grid container spacing={0} sx={{ height: '100vh', backdropFilter: 'blur(8px)' }}>
            <CssBaseline />

            <Grid item sm={false} md={3} lg={4}/>

            <Slide direction='left' in={true}>
              <Grid item xs={12} md={6} lg={4} display={'flex'} alignItems={'center'}>
                <LoginForm />
              </Grid>
            </Slide>

            <Grid item sm={false} md={3} lg={4}/>

          </Grid>
        </Box>
      </Fade>
    </>

  )
}
