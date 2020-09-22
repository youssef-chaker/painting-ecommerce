import { createSelector } from "reselect";

const selectSell = (state) => state.sell;

export const selectError = createSelector(
  [selectSell],
  (sell) => sell.postError
);

export const selectSuccess = createSelector(
  [selectSell],
  (sell) => sell.postSuccess
);
