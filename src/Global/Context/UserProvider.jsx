import React, { useState } from 'react'
import { UserContext } from './UserContext';


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authStatus, setAuthStatus] = useState(false);

    const loggedIn = (respUser) => {

        const { uid, name, role, token } = respUser
        setUser({
            uid, name, role, token
        })
        setAuthStatus(true);

    }

    const logout = () => {

        setUser(null);
        setAuthStatus(false);

    }


    return (
        <UserContext.Provider value={{ user, authStatus, loggedIn, logout }}>
            {children}
        </UserContext.Provider>

    )
}
