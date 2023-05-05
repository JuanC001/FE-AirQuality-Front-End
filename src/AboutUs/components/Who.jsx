import { Box, Typography, Grid, Divider, Slide } from '@mui/material'
import React from 'react'

import './Who.css'
import { AirParticles } from '../../Home/components/Particles/AirParticles'

export const Who = () => {
    return (
        <Box width={'75%'} mx={'auto'}>

            <Slide in={true}>
                <Grid container spacing={1} rowGap={3}>

                    <Grid item xs={12} md={4} textAlign={'center'}>

                        <Box className='texts' width={'90%'}>
                            <Typography variant="h2" color="primary.dark"><strong>¿Quienes Somos?</strong></Typography>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant="body1" color="initial" textAlign={'justify'} px={2} alignItems={'center'}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt nam quos eum aperiam cupiditate quas accusamus harum commodi sapiente earum, incidunt aspernatur sunt et saepe delectus cumque aut doloremque quaerat similique excepturi fugit, laboriosam facere fuga? Voluptate distinctio ducimus alias, ad repudiandae culpa est asperiores incidunt id voluptatibus veritatis.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Box>
                            <Divider variant='middle' orientation='horizontal' />
                        </Box>
                    </Grid>

                </Grid>
            </Slide>
            <AirParticles />

        </Box >
    )
}
