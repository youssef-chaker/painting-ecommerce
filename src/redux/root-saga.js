import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { sellSagas } from "./sell/sell.sagas";
import { shopSaga } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(sellSagas), call(shopSaga)]);
}
