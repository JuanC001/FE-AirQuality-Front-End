import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Auth'
import { Home } from '../Home'
import { NavBar } from '../Navbar/pages/NavBar'

export const AppRouter = () => {

    const authStatus = 'not-authorized'

    return (
        <>
            <NavBar />
            <Routes>

                <Route path='/auth/*' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>
    )
}
