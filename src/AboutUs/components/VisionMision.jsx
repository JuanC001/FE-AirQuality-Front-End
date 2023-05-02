import { Box, Grid, Paper, Slide } from '@mui/material'
import React from 'react'
import { CardVM } from './CardVM'
import { V_M } from './V_M'

import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const InsideGrid = () => {

    const vision = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum porro, laborum aliquam ea commodi tenetur vitae voluptatum aut! Porro optio amet nam magni distinctio delectus minima quam doloremque, voluptatibus, dignissimos deleniti, eos assumenda ea. Molestias labore, consequatur quidem, atque deleniti dolor nulla iure autem doloremque saepe earum excepturi blanditiis quibusdam ullam omnis in, cumque ad culpa sequi consectetur iusto? Quam nesciunt, sequi corporis earum eveniet, quos, eaque facere neque provident voluptatem quaerat veniam esse maxime beatae est praesentium commodi quasi aperiam cupiditate repellat officia doloremque amet rerum culpa. Officia, aut quibusdam. Ut consectetur aliquam voluptatibus minus, autem nam maiores quidem.'
    const mision = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum porro, laborum aliquam ea commodi tenetur vitae voluptatum aut! Porro optio amet nam magni distinctio delectus minima quam doloremque, voluptatibus, dignissimos deleniti, eos assumenda ea. Molestias labore, consequatur quidem, atque deleniti dolor nulla iure autem doloremque saepe earum excepturi blanditiis quibusdam ullam omnis in, cumque ad culpa sequi consectetur iusto? Quam nesciunt, sequi corporis earum eveniet, quos, eaque facere neque provident voluptatem quaerat veniam esse maxime beatae est praesentium commodi quasi aperiam cupiditate repellat officia doloremque amet rerum culpa. Officia, aut quibusdam. Ut consectetur aliquam voluptatibus minus, autem nam maiores quidem.'

    return (
        <>
            <Grid container columnSpacing={3} rowSpacing={3} rowGap={5}>
                <Slide in={true} direction='left'>
                    <Grid item xs={12}>
                        <CardVM component={Paper} elevation={6} display={'flex'} justifyContent={'center'}>
                            <V_M text={vision} icon={VisibilityIcon} title={'Nuestra Visión'} />
                        </CardVM>
                    </Grid>
                </Slide>
                <Slide in={true} direction='right'>
                    <Grid item xs={12}>
                        <CardVM component={Paper} elevation={6} display={'flex'} justifyContent={'center'}>
                            <V_M text={mision} icon={TrendingUpIcon} title={'Nuestra Misión'} direction={'row-reverse'} />
                        </CardVM>
                    </Grid>
                </Slide>
            </Grid>
        </>
    )
}

export const VisionMision = () => {


    return (
        <Box px={3} width={'98%'} display={'flex'} justifyContent={'center'}>
            <InsideGrid />
        </Box>
    )
}
