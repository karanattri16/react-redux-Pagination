import actionType from "./actionType";

function pagesCount() {
  return {
    type: actionType.FETCH_PAGE_COUNT,
  };
}

function currentPageCount(payload) {
  return {
    type: actionType.SET_CURRENTPAGE_COUNT,
    payload,
  };
}
function setCurrentPageCount(id) {
  return (dispatch) => {
    dispatch(currentPageCount(id));
  };
}
function getPagesCount() {
  return (dispatch) => {
    dispatch(pagesCount());
  };
}

export { getPagesCount, setCurrentPageCount };
