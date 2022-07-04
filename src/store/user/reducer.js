import ActionTypes from "./types";

const initialState = {
    userForm: {
        firstName: '',
        lastName: '',
        phoneNo: '',
    },
    isUserCreateAndUpdate: false,
    numberIndex: '',
    userId: '',
    users: [],
    isUserGetAndDeleteLoading: false,
    isUserCreateAndUpdateLoading: false,
    isUserAddDialogVisible: false,
    cricket: false,

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
        case ActionTypes.IS_SELECT_CHECKBOX: return {
            ...state,
            cricket: action.value
        }
        case ActionTypes.IS_USER_GET_AND_DELETE_LOADING: return {
            ...state,
            isUserGetAndDeleteLoading: action.loading
        }
        case ActionTypes.IS_BUTTON_LOADING: return {
            ...state,
            isUserCreateAndUpdateLoading: action.loading
        }
        case ActionTypes.IS_DIALOG_OPEN_AND_CLOSE: return {
            ...state,
            isUserAddDialogVisible: action.dialog
        }
        case ActionTypes.CREATE_USER_SUCCESSFULLY:
            state.isUserAddDialogVisible = false
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
            state.isUserCreateAndUpdate = true
            state.isUserAddDialogVisible = true
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
            state.isUserAddDialogVisible = false
            state.isUserCreateAndUpdate = false
            let users = state.users
            users[state.numberIndex] = action.user
            return {
                ...state,
                users: [...state.users],
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
        default: {
            return state;
        }
    }
}

export default reducer;