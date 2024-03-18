import React from "react";
import Post from "./Post.jsx";
import posts from "./assets/posts.js";

const Feed = () => {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
