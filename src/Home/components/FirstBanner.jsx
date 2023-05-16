import { Box, Divider, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'

export const FirstBanner = () => {

    const boxSx = {
        width: {
            xs: '100%',
            md: 200,
            lg: 400
        }
    }

    return (
        <>
            <Box bgcolor={'primary.light'} minHeight={'30vh'} display={'grid'} sx={{ placeContent: 'center' }}>
                <Stack direction={'row'} divider={<Divider variant='middle' orientation='vertical' flexItem sx={{ borderWidth: '2px', borderRadius: '10px' }} />} gap={{ xs: 2, sm: 2, md: 2, lg: 3 }} useFlexGap flexWrap={'wrap'} textAlign={'center'} py={5}>


                    <Box sx={boxSx}>
                        <Typography variant="h5" color="secondary.main" mb={2}><strong>Cantidad</strong></Typography>
                        <Typography variant="body1" color="initial" textAlign={'justify'} p={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam autem eos magnam, mollitia modi voluptatibus id ea, eveniet quod consectetur doloribus corporis impedit expedita velit! Perferendis exercitationem excepturi ea ipsum recusandae at obcaecati distinctio error laudantium explicabo. Itaque, quis sed!</Typography>
                    </Box>
                    <Box sx={boxSx}>
                        <Typography variant="h5" color="secondary.main" mb={2}><strong>Calidad</strong></Typography>
                        <Typography variant="body1" color="initial" textAlign={'justify'} p={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam autem eos magnam, mollitia modi voluptatibus id ea, eveniet quod consectetur doloribus corporis impedit expedita velit! Perferendis exercitationem excepturi ea ipsum recusandae at obcaecati distinctio error laudantium explicabo. Itaque, quis sed!</Typography>
                    </Box>
                    <Box sx={boxSx}>
                        <Typography variant="h5" color="secondary.main" mb={2}><strong>Recomendaciones</strong></Typography>
                        <Typography variant="body1" color="initial" textAlign={'justify'} p={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam autem eos magnam, mollitia modi voluptatibus id ea, eveniet quod consectetur doloribus corporis impedit expedita velit! Perferendis exercitationem excepturi ea ipsum recusandae at obcaecati distinctio error laudantium explicabo. Itaque, quis sed!</Typography>
                    </Box>
                    <Box sx={boxSx}>
                        <Typography variant="h5" color="secondary.main" mb={2}><strong>Alertas</strong></Typography>
                        <Typography variant="body1" color="initial" textAlign={'justify'} p={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam autem eos magnam, mollitia modi voluptatibus id ea, eveniet quod consectetur doloribus corporis impedit expedita velit! Perferendis exercitationem excepturi ea ipsum recusandae at obcaecati distinctio error laudantium explicabo. Itaque, quis sed!</Typography>
                    </Box>

                </Stack>
            </Box>
        </>
    )
}
