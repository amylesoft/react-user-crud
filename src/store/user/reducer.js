import ActionTypes from "./types";

const initialState = {
    userForm: {
        firstName: '',
        lastName: '',
        phoneNo: '',
    },
    isUpdatButtonHide: false,
    numberIndex: '',
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_FORM: return {
            ...state,
            userForm: {
                ...state.userForm,
                [action.key]: action.value
            }
        }
        case ActionTypes.CREATE_USER: return {
            ...state,
            users: [...state.users, state.userForm],
            ...state.userForm,
            userForm: {
                firstName: '',
                lastName: '',
                phoneNo: ''
            }
        }
        case ActionTypes.DELETE_USER: return {
            ...state,
            users: [
                ...state.users.slice(0, action.index),
                ...state.users.slice(action.index + 1)
            ]
        }
        case ActionTypes.UPDATE_USER: {
            state.isUpdatButtonHide = true
            let users = state.users
            state.userForm = users[action.index]
            state.numberIndex = action.index
            return {
                ...state,
                users: users
            }
        }
        case ActionTypes.UPDATE_USER_FORM: {
            state.isUpdatButtonHide = false
            return {
                ...state,
                users: [
                    ...state.users.slice(0, state.numberIndex),
                    state.userForm,
                    ...state.users.slice(state.numberIndex + 1)
                ],
                ...state.userForm,
                userForm: {
                    firstName: '',
                    lastName: '',
                    phoneNo: ''
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;