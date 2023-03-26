import { AppBar, Box, Button, Divider, IconButton, Menu, Stack, Toolbar } from '@mui/material'

import ImageUEB from '../../assets/images/logoUniversidadElBosque.png'
import AirImg from '../../assets/images/air_img.png'
import { Link, NavLink } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';

import './NavBar.css'
import { useMenuPop } from '../hooks/useMenuPop';
import { MenuGeneral } from '../components/MenuGeneral';

export const NavBar = () => {

    const { anchorElNav, openNav, menuOpen, menuClose } = useMenuPop()
    const { anchorElNav: anchor2, openNav: open2, menuOpen: menuOpen2, menuClose: menuClose2 } = useMenuPop()


    return (
        <AppBar>

            <Toolbar>

                <Stack direction={'row'} component={Link} to={'/'} sx={{ display: { md: 'flex' } }}>

                    <Box component={'img'} src={ImageUEB} alt={'Logo'} className='img-logo' />
                    <Box component={'img'} src={AirImg} alt={'Logo'} className='img-logo' />

                </Stack>

                <Box sx={{ flexGrow: 1 }} />

                <Box direction={'row'} sx={{ display: { md: 'flex', xs: 'none' } }} mx={1}>

                    <Button color='inherit' component={NavLink} to={'/'}>Inicio</Button>
                    <Button color='inherit' component={NavLink} to={'/'}>Sobre Nosotros</Button>
                    <Button color='inherit' component={NavLink} to={'/'}>Mas sobre el aire</Button>
                    <Divider orientation='vertical' color={'white'} variant={'middle'} />
                    <Button color='inherit' component={NavLink} to={'/auth/login'}>Iniciar Sesion</Button>

                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                    <IconButton size="large" aria-label='MenuReduced' aria-controls='menu-general' aria-haspopup='true' color='inherit' onClick={menuOpen}>
                        <MenuIcon />
                    </IconButton>

                </Box>

                <Menu anchorEl={anchorElNav} open={openNav}>
                    <MenuGeneral menuClose={menuClose} />
                </Menu>

            </Toolbar>

        </AppBar>
    )
}
