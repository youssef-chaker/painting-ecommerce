import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectPosts = createSelector([selectShop], (shop) =>
  shop.posts ? shop.posts : []
);

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsPostsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.posts
);
