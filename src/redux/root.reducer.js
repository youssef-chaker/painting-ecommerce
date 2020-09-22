import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import sellReducer from "./sell/sell.reducer";
import shopReducer from "./shop/shop.reducer";

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["loginError"],
  debug: true,
};

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["sell"],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  sell: sellReducer,
});

export default persistReducer(rootPersistConfig, rootReducer, shopReducer);
