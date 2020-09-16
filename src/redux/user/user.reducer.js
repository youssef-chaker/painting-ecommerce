import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null, //object with username and token
  loginError: null,
  signUpError: null,
  isSigningInUp: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        loginError: null,
        signUpError: null,
        isSigningInUp: true,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loginError: null,
        signUpError: null,
        isSigningInUp: false,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
        currentUser: null,
        isSigningInUp: false,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpError: action.payload,
        currentUser: null,
        isSigningInUp: false,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        loginError: null,
        isSigningInUp: false,
      };
    default:
      return state;
  }
};

export default userReducer;
