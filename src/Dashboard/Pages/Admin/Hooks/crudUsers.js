import AirqualityApi from "../../../../api/airqualityApi";

export const crudUsers = () => {

    const createUser = async (user) => {

        const newUser = await AirqualityApi.post('/admin/createUser', user)
        return newUser.data

    }
    const deleteUser = async (id) => {

        const deletedUser = await AirqualityApi.post('/admin/deleteUser', { id })
        return deletedUser.data

    }
    const updateUser = async (user) => {

        const updatedUser = await AirqualityApi.post('/admin/updateUser', user)
        return updatedUser.data

    }

    return {
        createUser,
        deleteUser,
        updateUser
    }

}