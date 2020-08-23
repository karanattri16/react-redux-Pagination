import React, { useEffect } from "react";
import {
  getPagesCount,
  setCurrentPageCount,
} from "../../Pagination Redux/Page Reducer/action";
import { getPostPerPage } from "../../Pagination Redux/Post Reducer/actions";
import { connect } from "react-redux";
import "./pagination.css";
function PageCount({
  count,
  posts,
  currentPageCount,
  setCurrentPage,
  getPostPerPage,
}) {
  let countArray = [];
  for (var i = 0; i < count; i++) {
    countArray.push(i + 1);
  }
  console.log(currentPageCount);
  return (
    <div className="pagination__container">
      {countArray.map((count) => (
        <div
          key={count}
          className="page__count"
          onClick={() => getPostPerPage(count)}
        >
          {count}
        </div>
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    posts: state.post.posts,
    count: state.page.pagesCount,
    currentPageCount: state.page.currentPageCount,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getPagesCount: () => dispatch(getPagesCount()),
    setCurrentPageCount: (id) => dispatch(setCurrentPageCount(id)),
    getPostPerPage: (id) => dispatch(getPostPerPage(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCount);
