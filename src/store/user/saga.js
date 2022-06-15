import actionTypes from "./types";
import { call, put, takeEvery } from 'redux-saga/effects'
import { select } from 'redux-saga/effects'
import UserService from "../../service/UserService";
const userService = new UserService()

const getItems = state => state.userState;
function* init() {
    yield takeEvery(actionTypes.CREATE_USER, createUser);
    yield takeEvery(actionTypes.GET_USER, getUser);
    yield takeEvery(actionTypes.DELETE_USER, deleteUser);
    yield takeEvery(actionTypes.UPDATE_USER_FORM, updateUser);
}

function* getUser() {
    yield put({ type: actionTypes.IS_USER_GET_AND_DELETE_LOADING, loading: true })
    try {
        const response = yield call(userService.findAll);
        yield put({ type: actionTypes.GET_USER_SUCCESSFULLY, user: response });
        yield put({ type: actionTypes.IS_USER_GET_AND_DELETE_LOADING, loading: false })
    } catch (e) {
        yield put({ type: actionTypes.IS_USER_GET_AND_DELETE_LOADING, loading: false })
    }
}

function* createUser() {
    yield put({ type: actionTypes.IS_USER_CREATE_AND_UPDATE_LOADING, loading: true })
    const user = yield select(getItems)
    try {
        const response = yield call(userService.create,
            {
                firstName: user.userForm.firstName,
                lastName: user.userForm.lastName,
                phoneNo: user.userForm.phoneNo
            })
        yield put({ type: actionTypes.CREATE_USER_SUCCESSFULLY, user: response });
        yield put({ type: actionTypes.IS_USER_CREATE_AND_UPDATE_LOADING, loading: false })
    } catch (e) {
        yield put({ type: actionTypes.IS_USER_CREATE_AND_UPDATE_LOADING, loading: false })
    }
}

function* deleteUser(user) {
    yield put({ type: actionTypes.IS_USER_GET_AND_DELETE_LOADING, loading: true })
    try {
        const response = yield call(userService.delete, user.id)
        yield put({ type: actionTypes.DELETE_USER_SUCCESSFULLY, index: user.index });
        yield put({ type: actionTypes.IS_USER_GET_AND_DELETE_LOADING, loading: false })
        console.log(response);
    } catch (e) {
        yield put({ type: actionTypes.IS_USER_GET_AND_DELETE_LOADING, loading: false })
    }
}

function* updateUser(user) {
    yield put({ type: actionTypes.IS_USER_CREATE_AND_UPDATE_LOADING, loading: true })
    const id = yield select(getItems)
    try {
        const response = yield call(userService.update, id.userId,
            {
                firstName: user.user.firstName,
                lastName: user.user.lastName,
                phoneNo: user.user.phoneNo
            })
        yield put({ type: actionTypes.UPDATE_USER_SUCCESSFULLY, user: response });
        yield put({ type: actionTypes.IS_USER_CREATE_AND_UPDATE_LOADING, loading: false })
    } catch (e) {
        yield put({ type: actionTypes.IS_USER_CREATE_AND_UPDATE_LOADING, loading: false })
    }
}

export default init;