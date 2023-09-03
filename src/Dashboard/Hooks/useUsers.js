import { useContext } from "react";
import { getEnvVariables } from "../../helpers";

import AirqualityApi from "../../api/airqualityApi";

export const useUsers = () => {

    const getAllDevicesList = async () => {

        const devices = await AirqualityApi.post('/device/getDeviceList')
        return devices.data

    }

    const getAllUsers = async () => {

        const users = (await AirqualityApi.post('/admin/getAllList'))
        return users.data

    }

    const getOneUser = async (id) => {

        const user = await AirqualityApi.post('/admin/getOneUser', { id })
        return user.data

    }

    const createUser = async (user) => {

        const newUser = await AirqualityApi.post('/admin/createUser', user)
        return newUser.data

    }

    const updateUser = async (user) => {

        const updatedUser = await AirqualityApi.post('/admin/updateUser', { user })
        return updatedUser.data

    }

    const deleteUser = async (id) => {

        const deletedUser = await AirqualityApi.post('/admin/deleteUser', { id })
        return deletedUser.data

    }

    const verifyOwner = async (id) => {

        const owner = await AirqualityApi.post('/admin/verifyOwner', { id })
        return owner.data

    }

    const verifyUser = async (email) => {

        const user = await AirqualityApi.post('/admin/verifyUser', { email })
        return user.data

    }

    return {

        getAllDevicesList,
        getAllUsers,
        getOneUser,
        createUser,
        updateUser,
        deleteUser,
        verifyOwner,
        verifyUser

    }

}