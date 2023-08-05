import { Box, Button, ButtonGroup, Divider, IconButton, Input, InputAdornment, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import RefreshIcon from '@mui/icons-material/Refresh';
import { ModalBox } from './ModalBox';
import { AnimatePresence } from 'framer-motion';


export const Actions = () => {

    const [search, setSearch] = useState('')

    const onInputChange = () => {

        setSearch('')

    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box component={Paper} elevation={6} height={'100%'} width={'100%'} borderRadius={'20px'} px={4} py={2} display={'flex'} alignContent={'center'} >


                <Box display={'flex'} width={'90%'} mx={'auto'} alignItems={'center'} justifyContent={'center'}>
                    <Box flexGrow={1}>
                        <TextField id="user" name='search' value={search} label="Search" variant="standard" color='secondary' InputProps={{
                            endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>
                        }} onChange={onInputChange} />
                    </Box>

                    <ButtonGroup variant='text' size='small'>
                        <IconButton onClick={handleOpen}><PersonAddAlt1Icon color='primary' /></IconButton>
                        <IconButton><PersonRemoveIcon color='error' /></IconButton>
                        <IconButton><RefreshIcon color='info' /></IconButton>
                    </ButtonGroup>

                </Box>
            </Box>
            <AnimatePresence>

                {
                    open && <ModalBox open={open} handleClose={handleClose} />
                }

            </AnimatePresence>
        </>
    )
}
