import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Auth'
import { Dashboard } from '../Dashboard/Dashboard'
import { Home } from '../Home'
import { NavBar } from '../Navbar/pages/NavBar'

export const AppRouter = () => {

    const authStatus = 'not-authorized'

    return (
        <>
            <NavBar authStatus={authStatus}/>
            <Routes>

                <Route path='/auth/*' element={<Login />} />
                <Route path='/dashboard/' element={<Dashboard />}/>
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>
    )
}
