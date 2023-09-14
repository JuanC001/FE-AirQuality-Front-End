import { Box, Button, Grid, Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import './User.css'
import { useUsers } from '../../../Hooks/useUsers'
import { IndividualUser } from './IndividualUser'
import { USER_TYPES } from '../../../../Consts/UsersTypes'

const SkeletonTemplate = () => {

    return (

        <Box height={'100%'} width={'100%'}>
            <Grid container>

                <Grid item xs={12} md={3}>
                    <Skeleton variant={'text'} />
                    <Skeleton variant={'text'} />

                </Grid>

                <Grid item xs={12} md={3}>

                    <Skeleton variant={'text'} />
                    <Skeleton variant={'text'} />

                </Grid>

                <Grid item xs={12} md={3} textAlign={'center'}>

                    <Skeleton variant={'text'} />
                    <Skeleton variant={'text'} />

                </Grid>

                <Grid item xs={12} md={3} display={'flex'} justifyContent={'center'}>

                    <Stack gap={1} width={'100px'}>
                        <Skeleton variant={'text'} />
                        <Skeleton variant={'text'} />
                    </Stack>
                </Grid>

            </Grid>

        </Box>
    )

}

export const Users = ({ getUsers, users, searchingInfo }) => {

    return (
        <Box component={Paper} elevation={6} height={'100%'} borderRadius={5} mt={2} display={'flex'} alignItems={'center'}>

            <Box className={'usersBox'} width={'90%'} height={'90%'} bgcolor={'white'} borderRadius={'20px'} sx={{ overflowY: 'scroll' }} mx={'auto'}>

                <TableContainer sx={{ maxHeight: '100%' }}>
                    <Table>
                        <TableHead sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255, 0.1)',backdropFilter: 'blur(10px)', zIndex: 1 }}>
                            <TableRow>
                                <TableCell>Nombre del Usuario</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Rol</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ overflowY: 'scroll' }}>
                            {

                                users.map((user) => (


                                    user.role !== USER_TYPES.ADM &&

                                    < IndividualUser key={user.email} user={user} getUsers={getUsers} />

                                )
                                )

                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>

        </Box>
    )
}
