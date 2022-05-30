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
export const deleteUser = (index) => {
    return {
        type: actionTypes.DELETE_USER,
        index: index
    }
}
export const updateUser = () => {
    return {
        type: actionTypes.UPDATE_USER,
    }
}
export default setUserForm = () => {
    return {
        type: actionTypes.UPDATE_USER_FORM,
    }
}
