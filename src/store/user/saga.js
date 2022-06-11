import actionTypes from "./types";
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { select } from 'redux-saga/effects'

const getItems = state => state.userState;
function* init() {
    yield takeEvery(actionTypes.CREATE_USER, createUser);
    yield takeEvery(actionTypes.GET_USER, getUser);
    yield takeEvery(actionTypes.DELETE_USER, deleteUser);
    yield takeEvery(actionTypes.UPDATE_USER_FORM, updateUser);
}

function* getUser() {
    yield put({ type: actionTypes.IS_LOADING, loading: true })
    try {
        const res = yield call(axios.get, 'http://52.66.67.128:3000/users');
        yield put({ type: actionTypes.GET_USER_SUCCESSFULLY, user: res.data });
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    } catch (e) {
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    }
}

function* createUser() {
    yield put({ type: actionTypes.IS_LOADING, loading: true })
    const user = yield select(getItems)
    try {
        const res = yield call(axios.post, 'http://52.66.67.128:3000/users', { firstName: user.userForm.firstName, lastName: user.userForm.lastName, phoneNo: user.userForm.phoneNo })
        yield put({ type: actionTypes.CREATE_USER_SUCCESSFULLY, user: res.data });
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    } catch (e) {
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    }
}

function* deleteUser(user) {
    yield put({ type: actionTypes.IS_LOADING, loading: true })
    try {
        const res = yield call(axios.delete, `http://52.66.67.128:3000/users/${user.id}`)
        yield put({ type: actionTypes.DELETE_USER_SUCCESSFULLY, index: user.index });
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    } catch (e) {
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    }
}

function* updateUser(user) {
    yield put({ type: actionTypes.IS_LOADING, loading: true })
    const id = yield select(getItems)
    try {
        const res = yield call(axios.patch, `http://52.66.67.128:3000/users/${id.userId}`, { firstName: user.user.firstName, lastName: user.user.lastName, phoneNo: user.user.phoneNo })
        yield put({ type: actionTypes.UPDATE_USER_SUCCESSFULLY, user: res.data });
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    } catch (e) {
        yield put({ type: actionTypes.IS_LOADING, loading: false })
    }
}

export default init;