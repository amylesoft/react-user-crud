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
export const isUserGetAndDeleteLoading = (loading) => {
    return {
        type: actionTypes.IS_USER_GET_AND_DELETE_LOADING,
        loading: loading
    }
}
export const isUserCreateAndUpdateLoading = (loading) => {
    return {
        type: actionTypes.IS_USER_CREATE_AND_UPDATE_LOADING,
        loading: loading
    }
}
export const isUserAddDialogVisible = (dialog) => {
    return {
        type: actionTypes.IS_DIALOG_OPEN_AND_CLOSE,
        dialog: dialog
    }
}
export const isSelectCheckBox = (value) => {
    return {
        type: actionTypes.IS_SELECT_CHECKBOX,
        value: value
    }
}