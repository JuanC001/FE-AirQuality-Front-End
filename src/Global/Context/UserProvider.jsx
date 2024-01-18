import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext';


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authStatus, setAuthStatus] = useState("checking");

    const loggedIn = (respUser) => {

        const { uid, name, role, token, device, firstLogin } = respUser
        setUser({
            uid, name, role, token, device, firstLogin
        })
        setAuthStatus(true);
        window.sessionStorage.setItem('user', JSON.stringify({ uid, name, role, token, device, firstLogin }));

    }

    const logout = () => {

        setUser(null);
        setAuthStatus(false);
        window.sessionStorage.removeItem('user');
        window.sessionStorage.clear();
        window.localStorage.clear();

    }

    useEffect(() => {

        const user = window.sessionStorage.getItem('user');
        if (user) {
            loggedIn(JSON.parse(user));
            return
        }

        setAuthStatus(false);

    }, [])

    return (
        <UserContext.Provider value={{ user, authStatus, loggedIn, logout }}>
            {children}
        </UserContext.Provider>

    )
}
