import UserActionTypes from "./user.types";

export const signInStart = (credentials) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: credentials,
});

export const signUpStart = (credentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: credentials,
});

export const signInSuccess = (currentUser) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: currentUser,
});

export const signUpSuccess = (currentUser) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: currentUser,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});
