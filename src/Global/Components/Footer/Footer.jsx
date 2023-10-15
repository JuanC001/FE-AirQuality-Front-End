import { Box, Divider, Grid, Stack, Typography, Link } from '@mui/material'
import React from 'react'

import logo from '../../../assets/images/Logo_de_la_Universidad_El_Bosque.svg.png'
import './Footer.css'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'

export const Footer = () => {
  return (
    <Box width={'100%'} minHeight={'30vh'} bgcolor={'secondary.dark'} sx={{ overflowX: 'hidden' }}>

      <Grid container spacing={1} textAlign={'center'} p={4} height={'100%'} pt={3}>

        <Grid item xs={12} md={3} height={'200px'}>

          <Stack gap={3} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box height={'150px'}>

              <Box className='imgLogo' component={'img'} src={logo} height={'100%'} />

            </Box>

          </Stack>


        </Grid>

        <Grid item xs={12} md={3} height={'200px'}>

          <Typography variant="h6" color="primary.contrastText" textAlign={'justify'}>Vicerrectoria de Investigaciones</Typography>
          <Divider variant='middle' color='white' />
          <Stack mt={2} px={1}>
            <Typography variant="body1" color="initial" textAlign={'justify'}>Av. Carrera 9 No 131A – 02. Bogotá D.C. Colombia</Typography>
            <Typography variant="body1" color="initial" textAlign={'justify'}>Edificio Fundadores, 6° piso - Universidad El Bosque</Typography>
            <Typography variant="body1" color="initial" textAlign={'justify'}>PBX: (601) 6489000, Exts. 1265 – 1100</Typography>
            <Typography variant="body1" color="initial" textAlign={'justify'}>Investigaciones@unbosque.edu.co</Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3} height={'200px'}>

          <Typography variant="h6" color="primary.contrastText" textAlign={'justify'}>Instituto de Salud y Ambiente</Typography>
          <Divider variant='middle' color='white' />
          <Stack mt={3}>

            <Typography variant="body1" color="initial" textAlign={'justify'}>Calle 131 No 7A – 68. Bogotá D.C. – Colombia</Typography>
            <Typography variant="body1" color="initial" textAlign={'justify'}>PBX: (601) 6489000 Exts. 1181 - 1417</Typography>
            <Typography variant="body1" color="initial" textAlign={'justify'}>semilleroteges@unbosque.edu.co</Typography>

          </Stack>

        </Grid>

        <Grid item xs={6} md={3} height={'200px'}>

          <Typography variant="h6" color="primary.contrastText" textAlign={'justify'}>Contactanos</Typography>
          <Divider variant='middle' color='white' />

          <Stack gap={1} display={'flex'} alignItems={'center'} height={'100%'} p={1}>
            <Link
              href="https://twitter.com/U_ElBosque"
              variant="body1"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              color="initial"
              sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
            >
              <Twitter />
              Twitter
            </Link>

            <Link
              href="https://www.facebook.com/universidadelbosque"
              variant="body1"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              color="initial"
              sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
            >
              <Facebook />
              Facebook

            </Link>

            <Link
              href="https://www.youtube.com/user/UNIVERSIDADELBOSQUE"
              variant="body1"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              color="initial"
              sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
            >
              <YouTube />
              Youtube
            </Link>

            <Link
              href="https://www.instagram.com/uelbosque"
              variant="body1"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              color="initial"
              sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
            >
              <Instagram />
              Instagram
            </Link>

            <Link
              href="https://www.linkedin.com/school/universidad-el-bosque/"
              variant="body1"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              color="initial"
              sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
            >
              <LinkedIn />
              LinkedIn
            </Link>

          </Stack>

        </Grid>

      </Grid>

      <Box minHeight={'40px'} bgcolor={'secondary.light'} p={2}>

        <Typography variant="body1" color="secondary.contrastText" textAlign={'center'}>Vigilada Mineducación Personería Jurídica otorgada mediante resolución 11153 del 4 de agosto de 1978</Typography>

      </Box>

    </Box>
  )
}
