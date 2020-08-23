import actionTypes from "./actionType";

const initialState = {
  pagesCount: 10,
  currentPageCount: {},
};

function pageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PAGE_COUNT:
      return {
        ...state,
      };
    case actionTypes.SET_CURRENTPAGE_COUNT:
      return {
        ...state,
        currentCount: action.payload,
      };
    default:
      return initialState;
  }
}
export default pageReducer;
