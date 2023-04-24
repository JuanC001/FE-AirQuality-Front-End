import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Auth'
import { Dashboard } from '../Dashboard/Dashboard'
import { UserProvider } from '../Global/Context/UserProvider'
import { Home } from '../Home'
import { NavBar } from '../Navbar/pages/NavBar'
import { About } from '../AboutUs/pages/About'
import { AboutAir } from '../AboutAir/pages/AboutAir'
import { Footer } from '../Home/components/Footer/Footer'

export const AppRouter = () => {

    return (
        <>
            <UserProvider>
                <NavBar />
                <Routes>
                    <Route path='/about-us' element={<About />} />
                    <Route path='/about-air' element={<AboutAir />} />
                    <Route path='/auth/*' element={<Login />} />
                    <Route path='/dashboard/' element={<Dashboard />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/*' element={<Navigate to={'/'} />} />

                </Routes>
                <Footer />
            </UserProvider>


        </>
    )
}
