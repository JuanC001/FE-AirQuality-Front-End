import { Box, Typography, Grid } from '@mui/material'
import React from 'react'

export const Who = () => {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>

            <Grid container spacing={1} minWidth={'50'} maxWidth={'75%'}>

                <Grid item xs={12} md={3} textAlign={'center'}>

                    <Typography variant="h2" color="primary.dark"><strong>¿Quienes Somos?</strong></Typography>

                </Grid>

                <Grid item xs={12} md={9} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant="body1" color="initial" textAlign={'justify'} px={2} alignItems={'center'}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt nam quos eum aperiam cupiditate quas accusamus harum commodi sapiente earum, incidunt aspernatur sunt et saepe delectus cumque aut doloremque quaerat similique excepturi fugit, laboriosam facere fuga? Voluptate distinctio ducimus alias, ad repudiandae culpa est asperiores incidunt id voluptatibus veritatis.
                    </Typography>
                </Grid>

            </Grid>

        </Box>
    )
}
