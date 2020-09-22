import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { sellSagas } from "./sell/sell.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(sellSagas)]);
}
