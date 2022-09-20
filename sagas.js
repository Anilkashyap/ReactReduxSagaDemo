import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./action";

function usersFetch() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());
}

export function* testSaga() {
    console.log('Hello Sagas!')
   yield takeEvery(GET_USERS_FETCH, workFetchUserData);
}

function* workFetchUserData() {
    const users = yield call(usersFetch);
    console.log("users",users);
    yield put({ type: GET_USERS_SUCCESS, users });
}