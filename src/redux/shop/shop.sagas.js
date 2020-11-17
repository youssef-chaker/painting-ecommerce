import { call, put, takeLatest, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { FetchPostFailure, FetchPostSuccess } from "./shop.actions";

export function* onFetchStart() {
  yield takeLatest(ShopActionTypes.FETCH_POSTS_START, fetchPosts);
}

export function* fetchPosts() {
  try {
    const posts = yield call(fetchPostsAsync);
    yield put(FetchPostSuccess(posts));
  } catch (err) {
    yield put(FetchPostFailure(err.message));
  }
}

function* fetchPostsAsync() {
  const response = yield fetch(`http://localhost:8080/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const status = yield response.status;
  if (status === 200) {
    const json = yield response.json();
    return json;
  }
}

export function* shopSaga() {
  yield all([call(onFetchStart)]);
}
