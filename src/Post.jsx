import React from "react";

function Post({ post }) {
  return (
    <div className="post-container">
      <h3 className="name">{post.username}</h3>
      <p className="content">{post.content}</p>
      <p className="likes">
        {<img className="like-icon" src="src/assets/licon.jpg" alt="" />}
        {post.likes}
      </p>
      <p className="timestamp">{post.timestamp}</p>
    </div>
  );
}

export default Post;
