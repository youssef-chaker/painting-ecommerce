import UserActionTypes from "./user.types";

export const signInStart = (credentials) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: credentials,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
