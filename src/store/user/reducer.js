
import ActionTypes from "./types";

const initialState = {
    userForm: {
        firstName: '',
        lastName: '',
        phoneNo: '',
    },
    isUpdatButtonHide: false,
    numberIndex: '',
    userId: '',
    users: [],
    age: '',
    hobbies: '',
    userCheck: {
        cricket: false,
        football: false,
        tennis: false
    },
    isLoadingForApi: false
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
        case ActionTypes.IS_LOADING: return {
            ...state,
            isLoadingForApi: action.loading
        }
        case ActionTypes.UPDATE_AGE: return {
            ...state,
            age: action.value
        }
        case ActionTypes.CREATE_USER_SUCCESSFULLY:
            return {
                ...state,
                users: [...state.users, action.user],
                ...state.userForm,
                userForm: {
                    firstName: '',
                    lastName: '',
                    phoneNo: ''
                }
            }
        case ActionTypes.DELETE_USER_SUCCESSFULLY: return {
            ...state,
            users: [
                ...state.users.slice(0, action.index),
                ...state.users.slice(action.index + 1)
            ]
        }
        case ActionTypes.UPDATE_USER: {
            state.isUpdatButtonHide = true
            let users = state.users
            state.userId = action.user._id
            state.userForm = action.user
            state.numberIndex = action.index
            return {
                ...state,
                users: users
            }
        }
        case ActionTypes.UPDATE_USER_SUCCESSFULLY: {
            state.isUpdatButtonHide = false
            let users = state.users
            users[state.numberIndex] = action.user
            return {
                ...state,
                users: users,
                userForm: {
                    firstName: '',
                    lastName: '',
                    phoneNo: ''
                }
            }
        }
        case ActionTypes.GET_USER_SUCCESSFULLY: {
            return {
                ...state,
                users: action.user
            }
        }
        // case ActionTypes.SELECT_RADIO: return {
        //     ...state,
        //     hobbies: action.value
        // }
        // case ActionTypes.SELECT_CHECKBOX: return {
        //     ...state,
        //     userCheck: {
        //         ...state.userCheck,
        //         [action.key]: action.value
        //     }
        // }
        default: {
            return state;
        }
    }
}

export default reducer;