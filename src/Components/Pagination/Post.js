import React from "react";
import "./post.css";
function Post({ posts }) {
  console.log(posts);
  return (
    <div className="posts__container">
      <div className="posts__list">
        {posts.map((post) => (
          <div key={post.id} className="list__item">
            <img
              src={post.thumbnailUrl}
              alt={post.title}
              width={30}
              height={20}
            />
            <span>{post.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
