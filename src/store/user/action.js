import actionTypes from "./types"

export const updateForm = ({ key, value }) => {
    return {
        type: actionTypes.UPDATE_FORM,
        key: key,
        value: value
    }
}
export const createUser = () => {
    return {
        type: actionTypes.CREATE_USER,
    }
}
export const createUserSuccessfully = (user) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESSFULLY,
        user: user
    }
}
export const deleteUser = () => {
    return {
        type: actionTypes.DELETE_USER,
    }
}
export const deleteUserSuccessfully = (index) => {
    return {
        type: actionTypes.DELETE_USER_SUCCESSFULLY,
        index: index
    }
}
export const updateUser = (index, user) => {
    return {
        type: actionTypes.UPDATE_USER,
        index: index,
        user: user
    }
}
export const setUserForm = (user) => {
    return {
        type: actionTypes.UPDATE_USER_FORM,
        users: user
    }
}
export const updateUserSuccessfully = (user) => {
    return {
        type: actionTypes.UPDATE_USER_SUCCESSFULLY,
        user: user
    }
}
export const getUser = () => {
    return {
        type: actionTypes.GET_USER
    }
}
export const getUserSuccessfully = (user) => {
    return {
        type: actionTypes.GET_USER_SUCCESSFULLY,
        user: user
    }
}
export const updateAge = (value) => {
    return {
        type: actionTypes.UPDATE_AGE,
        value: value
    }
}
export const isLoading = (loading) => {
    return {
        type: actionTypes.IS_LOADING,
        loading: loading
    }
}
// export const selectRadio = (value) => {
//     return {
//         type: actionTypes.SELECT_RADIO,
//         value: value
//     }
// }
// export const selectCheckBox = ({ key, value }) => {
//     return {
//         type: actionTypes.SELECT_CHECKBOX,
//         key: key,
//         value: value
//     }
// }