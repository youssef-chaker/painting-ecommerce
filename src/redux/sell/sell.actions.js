import SellActionTypes from "./sell.types";

export const PostStart = (info) => ({
  type: SellActionTypes.POST_START,
  payload: info,
});

export const PostFailure = (error) => ({
  type: SellActionTypes.POST_FAILURE,
  payload: error,
});

export const PostSuccess = () => ({
  type: SellActionTypes.POST_SUCCESS,
});

export const Reset = () => ({
  type : SellActionTypes.RESET
})
