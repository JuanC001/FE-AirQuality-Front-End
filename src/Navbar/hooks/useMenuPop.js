import React, { useState } from 'react'

export const useMenuPop = () => {

    const [anchorElNav, setAnchorElNav] = useState(null)
    const openNav = Boolean(anchorElNav);

    const menuOpen = (e = Event) => {

        setAnchorElNav(e.currentTarget);

    }

    const menuClose = () => {

        setAnchorElNav(null)

    }

    return {
        anchorElNav,
        openNav,
        menuOpen,
        menuClose,
    }

}
