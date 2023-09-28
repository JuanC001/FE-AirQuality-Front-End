import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Auth'
import { Dashboard } from '../Dashboard/Dashboard'
import { Home } from '../Home'
import { About } from '../AboutUs/pages/About'
import { AboutAir } from '../AboutAir/pages/AboutAir'
import { NavBar } from '../Global/Components/Navbar/NavBar'
import { Footer } from '../Global/Components/Footer/Footer'
import { UserContext } from '../Global/Context/UserContext'
import { AnimatePresence } from 'framer-motion'
import { useAuthStore } from '../Auth/hooks/useAuthStore'


export const AppRouter = () => {


    const { checkAuthToken } = useAuthStore()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { authStatus } = useContext(UserContext)

    useEffect(() => {

        checkAuthToken()

    }, [])

    return (
        <>
            <NavBar />
            <AnimatePresence>
                <Routes>

                    <Route path='/about-us' element={
                        <About />
                    }
                    />
                    <Route path='/about-air' element={
                        <AboutAir />
                    }
                    />
                    <Route path='/auth/*' element={
                        <Login />
                    }
                    />
                    <Route path='/' element={
                        <Home />
                    } />
                    <Route path='/*' element={
                        <Navigate to={'/'} />
                    } />

                    {authStatus ?

                        <Route path='/dashboard/' element={<Dashboard />} /> : <></>

                    }

                </Routes>
            </AnimatePresence >

            <Footer />

        </>
    )
}
