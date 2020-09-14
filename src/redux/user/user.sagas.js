import { all, call, takeLatest } from "redux-saga/effects";
import UserActionTypes from "./user.types";

export function* signIn({ payload: { username, password } }) {
  const user = yield fetch("");
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* userSagas() {
  yield all([]);
}
