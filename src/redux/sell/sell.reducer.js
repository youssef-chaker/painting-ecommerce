import SellActionTypes from "./sell.types";

const INITIAL_STATE = {
  postError: null,
  postSuccess: null,
  isPosting: false,
};

const sellReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SellActionTypes.POST_START:
      return {
        ...state,
        isPosting: true,
      };
    case SellActionTypes.POST_SUCCESS:
      return {
        ...state,
        postError: null,
        postSuccess: true,
        isPosting: false,
      };
    case SellActionTypes.POST_FAILURE:
      return {
        ...state,
        postError: action.payload,
        postSuccess: null,
        isPosting: false,
      };
    case SellActionTypes.RESET:
      return {
        ...state,
        postError: null,
        postSuccess: null,
        isPosting: false
      }
    default:
      return state;
  }
};

export default sellReducer;
