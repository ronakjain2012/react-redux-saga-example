import { takeLatest, all, call } from "redux-saga/effects";
import { handleGetSingleUser, handleGetUsers } from "./handlers/users";
import { GET_USERS, GET_USER_DETAILS } from "../stores/user";


export function* GET_USERSSaga() {
  yield takeLatest(GET_USERS, handleGetUsers);
}


export function* GET_USER_DETAILSSaga() {
  yield takeLatest(GET_USER_DETAILS, handleGetSingleUser);
}



export function* watcherSaga() {
  yield all([call(GET_USER_DETAILSSaga),call(GET_USERSSaga)]);
}

