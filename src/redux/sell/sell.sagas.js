import { all, call, takeLatest, put, select } from "redux-saga/effects";
import SellActionTypes from "./sell.types";
import { PostFailure, PostSuccess } from "./sell.actions";

export function* onPostStart() {
  yield takeLatest(SellActionTypes.POST_START, post);
}

export function* post({ payload }) {
  try {
    yield call(postAsync, payload);
    yield put(PostSuccess());
  } catch (err) {
    yield put(PostFailure(err.message));
  }
}

function* postAsync(info) {
  info.price = Number.parseFloat(info.price);
  const token = yield select((state) => state.user.currentUser.token);
  const response = yield fetch(`https://localhost:5001/api/Posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(info),
  });
  const json = yield response.json();
  if (!json.postId) {
    throw Error(json.errors[Object.keys(json.errors)[0]][0]);
  }
  return json;
}

export function* sellSagas() {
  yield all([call(onPostStart)]);
}
