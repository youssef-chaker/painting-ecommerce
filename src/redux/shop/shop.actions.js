import ShopActionTypes from "./shop.types";

export const FetchPostStart = () => ({
  type: ShopActionTypes.FETCH_POSTS_START,
});

export const FetchPostFailure = (error) => ({
  type: ShopActionTypes.FETCH_POSTS_FAILURE,
  payload: error,
});

export const FetchPostSuccess = (posts) => ({
  type: ShopActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});
