import { createStore, applyMiddleware } from "redux";
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import userState from './user/reducer'
import userSaga from "./user/saga"

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    userState
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga)
export default store;