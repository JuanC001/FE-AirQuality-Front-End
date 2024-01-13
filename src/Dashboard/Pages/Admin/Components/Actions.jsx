import { Box, Button, ButtonGroup, Divider, IconButton, Input, InputAdornment, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import RefreshIcon from '@mui/icons-material/Refresh';
import { ModalBox } from './ModalBox';
import { AnimatePresence } from 'framer-motion';


export const Actions = ({ getUsers }) => {

    const [search, setSearch] = useState('')

    const onInputChange = () => {

        setSearch('')

    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        getUsers()
    };

    return (

        <Box height={'100%'} width={'100%'} display={'flex'} alignContent={'center'} >

            <Box display={'flex'} width={'100%'} mx={'auto'} alignItems={'center'} justifyContent={'center'}>
                <Box flexGrow={1}>
                    <TextField id="searchUser" name='searchUser' value={search} label="Search" variant="standard" color='secondary' InputProps={{
                        endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>
                    }} onChange={onInputChange} fullWidth/>
                </Box>

                <ButtonGroup variant='text' size='small'>
                    <IconButton onClick={handleOpen}><PersonAddAlt1Icon color='primary' /></IconButton>
                </ButtonGroup>

            </Box>
            <AnimatePresence>

                {
                    open && <ModalBox open={open} handleClose={handleClose} />
                }

            </AnimatePresence>
        </Box>


    )
}
