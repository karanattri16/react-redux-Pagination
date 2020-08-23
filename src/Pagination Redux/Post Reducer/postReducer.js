import actionTypes from "./actionTypes";

const initialState = {
  posts: [],
  pagePost: [],
  isLoading: false,
  error: "",
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case actionTypes.FETCH_POST_PER_PAGE:
      return {
        ...state,
        pagePost: action.payload,
      };
    case actionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
}
