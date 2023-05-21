import React from 'react'
import AirqualityApi from '../../../../api/airqualityApi'


export const getUsers = () => {

    const getAllUsers = () => {

        const users = AirqualityApi.post('/user/getAllList')
        return users.data

    }

    const getOneUser = async () => {

        const user = await AirqualityApi.post('/user/getOneUser', { id })
        return user.data

    }

    return {
        getAllUsers,
        getOneUser
    }
  
}
