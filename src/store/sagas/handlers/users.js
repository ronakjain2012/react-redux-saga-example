import { call, put } from "redux-saga/effects";
import { setUserDetails, setUsers } from "../../stores/user";
import { requestGetSingleUser, requestGetUsers } from "../request/users";

export function* handleGetUsers(action) {
  try {
    const response = yield call(requestGetUsers);
    const { data } = response;
    yield put(setUsers(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetSingleUser(action) {
  console.log(action,'===========');
  try {
    const response = yield call(requestGetSingleUser,action.ID);
    const { data } = response;
    yield put(setUserDetails(data));
  } catch (error) {
    console.log(error);
  }
}