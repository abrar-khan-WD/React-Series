import React from "react";
import { AppContext } from "../context/AppContext";

const Blog = () => {
  // Consume the context here if needed
  const { loading, post } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>
          <h2>No Post Available</h2>
        </div>
      ) : (
        post.map((singlePost) => (
          <div>
            
            <p>{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>
              Posted On <span>{post.date}</span>
            </p>
            <p>
              {post.content}
            </p>
            <p>
              {post.tags}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
