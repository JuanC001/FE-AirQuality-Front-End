import { Box, Divider, Grid, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'

import { motion } from 'framer-motion'

export const FirstBanner = () => {

    const cantidad = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dicta odit vero mollitia provident asperiores, impedit architecto expedita placeat, omnis aliquid aliquam? Hic obcaecati, cumque commodi libero magni harum est.'
    const calidad = cantidad
    const recomendaciones = cantidad
    const alertas = cantidad

    const Stack_personalized = ({ title, text, delay }) => {

        const [isHover, setIsHover] = useState(false)
        const handleHover = () => {

            setIsHover(!isHover)

        }

        return (
            <>
                <motion.div whileHover={{ y: -5 }}>
                    <motion.div whileInView={{ y: [0, 0, -12, -10, 0] }} viewport={{ once: true }} key={title} transition={{ delay: delay }} onHoverStart={handleHover} onHoverEnd={handleHover}>
                        <Stack gap={1} mx={'auto'} bgcolor={isHover ? 'secondary.main' : 'secondary.light'} p={1} className='block-firstbanner'>
                            <Typography variant={'h5'} textAlign={'center'} color={'primary.dark'}><b>{title}</b></Typography>
                            <Divider variant='middle' />
                            <Box width={'80%'} mx={'auto'}>
                                <Typography variant={'body2'} >{text}</Typography>
                            </Box>
                        </Stack>
                    </motion.div>
                </motion.div>
            </>)
    }

    return (
        <>
            <Box>
                <Box height={100} bgcolor={'secondary.light'}></Box>
                <Grid container mx={'auto'} bgcolor={'primary.main'}>
                    <Grid item xs={12} md={6} lg={3} display={'flex'} alignContent={'center'} alignItems={'center'}>
                        <Stack_personalized title={'Cantidad'} text={cantidad} delay={0.2} />
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} display={'flex'} alignContent={'center'} alignItems={'center'}>
                        <Stack_personalized title={'Calidad'} text={calidad} delay={0.4} />
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} display={'flex'} alignContent={'center'} alignItems={'center'}>
                        <Stack_personalized title={'Recomendaciones'} text={recomendaciones} delay={0.6} />
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} display={'flex'} alignContent={'center'} alignItems={'center'}>
                        <Stack_personalized title={'Alertas'} text={alertas} delay={0.8} />
                    </Grid>

                </Grid>
                <Box height={100} bgcolor={'secondary.light'}></Box>
            </Box>
        </>
    )
}
