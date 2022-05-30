import actionTypes from "./types";
import { takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { select } from 'redux-saga/effects'

const getItems = state => state.userState;
function* init() {
    yield takeEvery(actionTypes.CREATE_USER, createUser);
}

function* createUser() {
    const user = yield select(getItems);
    axios.post("http://52.66.67.128:3000/users", { firstName: user.firstName, lastName: user.lastName, phoneNo: user.phoneNo })
        .then((res) => {
            console.log(res);
        })

}
export default init;