import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  fetchError: null,
  posts: null,
  isFetching: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetchError: null,
        posts: action.payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        fetchError: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
