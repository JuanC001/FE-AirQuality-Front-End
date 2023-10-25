import { Box, Grid, CssBaseline, Slide, Fade } from '@mui/material'

import './Login.css'
import { LoginForm } from '../components/LoginForm';
import AirParticles from '../../Dashboard/Pages/User/components/particles/AirParticles';

import { motion } from 'framer-motion'
import lines from '../../assets/SVG/Lines.svg'

export const Login = () => {

  window.scrollTo(0, 0)

  return (

    <>
      <Fade in={true}>

        <Box component={'main'} sx={{ backgroundColor: 'primary.light', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>

          <Grid container spacing={0} sx={{ minHeight: '100vh', backdropFilter: 'blur(1px)', overflow: 'hidden' }}>

            <Box sx={{ position: 'absolute', left: '-30%', filter: 'hue-rotate(30deg) contrast(5)' }} component={motion.object} data={lines} initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 1, pathLength: 1 }} >

            </Box>

            <Box sx={{ position: 'absolute' }} zIndex={0}>
              <AirParticles />
            </Box>
            <CssBaseline />

            <Grid item sm={false} md={3} lg={4} />


            <Grid item xs={12} md={6} lg={4} display={'flex'} alignItems={'center'} zIndex={1}>
              <LoginForm />
            </Grid>


            <Grid item sm={false} md={3} lg={4} />

          </Grid>
        </Box>
      </Fade>
    </>

  )
}
