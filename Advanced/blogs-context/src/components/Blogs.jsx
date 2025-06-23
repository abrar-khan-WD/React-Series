import React from "react";
import { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <h2>No Posts Found</h2>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>
              By <span>{post.author}</span> on {post.category}
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return <span key={index}>
                    {`#${tag}`}
                    </span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
