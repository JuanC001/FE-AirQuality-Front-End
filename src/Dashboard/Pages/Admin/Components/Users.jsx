import { Box, Button, Grid, Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import './User.css'
import { IndividualUser } from './IndividualUser'
import { USER_TYPES } from '../../../../Consts/UsersTypes'

export const Users = ({ getUsers, users }) => {

    return (
        <Box component={'div'} elevation={6} height={'100%'} borderRadius={5} mt={2} display={'flex'} alignItems={'center'}>

            <Box className={'usersBox'} width={'100%'} height={'90%'} sx={{ overflowY: 'scroll' }} mx={'auto'}>

                <TableContainer sx={{ maxHeight: '100%' }}>
                    <Table>
                        <TableHead sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', zIndex: 1 }}>
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

                                    <IndividualUser key={user.email} user={user} getUsers={getUsers} />

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
