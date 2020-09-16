import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { signInSuccess, signInFailure, signUpFailure } from "./user.actions";

async function authenticateAsync(user) {
  const response = await fetch(
    `https://localhost:5001/api/Users/authenticate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const json = await response.json();
  if (!json.token) throw Error(json.message);
  return json;
}

async function registerAsync(user) {
  const response = await fetch(`https://localhost:5001/api/Users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const json = await response.json();
  if (!json.token) throw Error(json.message);
  return json;
}

export function* signIn({ payload }) {
  try {
    const user = yield call(authenticateAsync, payload);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signUp({ payload }) {
  try {
    const user = yield call(registerAsync, payload);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart)]);
}
