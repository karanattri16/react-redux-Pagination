import actionTypes from "./actionTypes";
import axios from "axios";
function fetchPostRequest(payload) {
  return {
    type: actionTypes.FETCH_POSTS_REQUEST,
    payload,
  };
}
function fetchPostSuccess(payload) {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload,
  };
}
function fetchPostFailure(payload) {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE,
    payload,
  };
}
function fetchPostPerPage(payload) {
  return {
    type: actionTypes.FETCH_POST_PER_PAGE,
    payload,
  };
}

let data = [];
function getPosts() {
  return async (dispatch) => {
    try {
      dispatch(fetchPostRequest());
      var res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      data = res.data;
      dispatch(fetchPostSuccess(data));
      let postPerPage = [];
      for (let i = 0; i < 10; i++) {
        postPerPage.push(data[i]);
      }
      dispatch(fetchPostPerPage(postPerPage));
    } catch (error) {
      dispatch(fetchPostFailure(error));
    }
  };
}

function getPostPerPage(pageCount) {
  return (dispatch) => {
    try {
      let startIndex = 10 * pageCount - 10;
      let endIndex = 10 * pageCount;
      let postPerPage = [];
      for (let i = startIndex; i < endIndex; i++) {
        postPerPage.push(data[i]);
      }
      console.log(postPerPage);
      dispatch(fetchPostPerPage(postPerPage));
    } catch (error) {
      dispatch(fetchPostFailure(error));
    }
  };
}
export { getPosts, getPostPerPage };
