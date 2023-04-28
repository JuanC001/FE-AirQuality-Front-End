import { Avatar, Button, Divider, FormControl, Typography, Box, Stack, Paper, TextField, InputAdornment, FormControlLabel, Checkbox, Input, FormGroup, InputLabel, Slide } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import KeyIcon from '@mui/icons-material/Key';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ImageUEB from './../../assets/images/ueb_logomin.png';
import { useForm } from '../hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const LoginForm = () => {

    const { startLogin } = useAuthStore()
    const navigate = useNavigate()

    const [onEnter, setonEnter] = useState(true)

    const { user, password, onInputChange, onResetForm } = useForm({

        user: '',
        password: '',

    })

    const timeout = ((delay) => {

        return new Promise(res => setTimeout(res, delay))

    })

    const login = async (e) => {

        e.preventDefault();
        const userResp = await startLogin(user, password)
        if (userResp) {

            setonEnter(false)

            await timeout(500)

            navigate('/dashboard')

        }
    }

    return (

        <Slide in={onEnter} direction='up'>

            <Box component={Paper} minHeight={'100vh'} borderRadius={0} elevation={3} display={'flex'} alignItems={'center'} bgcolor={'white'} mb={3}>
                <Box>
                    <Stack spacing={2} paddingTop={9} alignItems={'center'} mb={2}>
                        <Box component={'img'} src={ImageUEB} className='img_ueb' alt='ueb_logo' maxWidth={'40%'} />
                    </Stack>

                    <Divider variant='middle' />

                    <Stack spacing={2} alignItems={'center'} mt={2}>

                        <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Box component={'form'} onSubmit={login}>

                            <Stack spacing={4}>

                                <TextField id="user" name='user' value={user} label="Usuario" variant="standard" color='secondary' InputProps={{
                                    endAdornment: <InputAdornment position="end"><AccountCircleIcon /></InputAdornment>
                                }} onChange={onInputChange} />
                                <TextField id="pass" name='password' value={password} label="Contraseña" variant="standard" color='secondary' type='password' InputProps={{
                                    endAdornment: <InputAdornment position="end"><KeyIcon /></InputAdornment>
                                }} onChange={onInputChange} />
                                <FormControlLabel control={<Checkbox value={'Recuerdame'} />} label='Recuerdame' />
                                <Button type='submit' variant="contained" color="secondary" sx={{ m: 'auto', p: 'auto' }} startIcon={<LoginIcon />}>
                                    Login
                                </Button>

                            </Stack>

                        </Box>

                    </Stack>
                </Box>
            </Box>

        </Slide>

    )
}
