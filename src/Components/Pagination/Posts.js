import React, { useEffect } from "react";
import { getPosts } from "../../Pagination Redux/Post Reducer/actions";
import { connect } from "react-redux";
import Post from "./Post";
import PageCount from "./PageCount";
function Posts({ getPost, posts, isLoading, error, pagePost }) {
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <Post posts={pagePost} />
      <PageCount />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    posts: state.post.posts,
    pagePost: state.post.pagePost,
    isLoading: state.post.isLoading,
    error: state.post.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getPost: () => dispatch(getPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
