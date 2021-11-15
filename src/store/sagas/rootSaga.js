import { takeLatest } from "redux-saga/effects";
import { handleGetSingleUser, handleGetUsers } from "./handlers/users";
import { GET_USERS, GET_USER_DETAILS } from "../stores/user";

export function* watcherSaga() {
  yield takeLatest(GET_USERS, handleGetUsers);
  yield takeLatest(GET_USER_DETAILS, handleGetSingleUser);
}

