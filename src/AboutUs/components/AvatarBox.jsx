import { Avatar as avs, Box, Stack, styled, Typography, useTheme } from '@mui/material'
import React from 'react'

import { motion } from 'framer-motion'

const Avatar = styled(avs)(({ theme }) => ({

    height: '100%',
    width: '100%'

}))

export const AvatarBox = ({ src, title, subtitle }) => {

    return (
        <>
            <motion.div initial={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} whileHover={{
                y: -10,
                boxShadow: '10px 10px 15px grey',
                borderTopLeftRadius: '20px', borderTopRightRadius: '20px'
            }
        }
                onClick={e => console.log('click')}
            >
                <Box width={'18vh'} height={'18vh'} position={'relative'}>

                    <Avatar variant='square' sx={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                    <Box width={'100%'} height={'30%'} bgcolor={'primary.main'} color={'white'} position={'absolute'} sx={{ bottom: 0 }}>
                        <Stack>
                            <Typography variant='h6' textAlign={'center'} fontSize={'100%'}>
                                <b>
                                    {title}
                                </b>
                            </Typography>
                            <Typography variant='caption' textAlign={'center'} fontSize={{ xs: '12px' }}>
                                <b>
                                    {subtitle}
                                </b>
                            </Typography>
                        </Stack>
                    </Box>

                </Box >
            </motion.div>
        </>
    )

}
