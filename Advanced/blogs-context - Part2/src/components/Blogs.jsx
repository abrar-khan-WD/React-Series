import React from "react";
import { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="flex flex-col w-full max-w-[655px] mx-auto px-4 gap-y-11 mt-[90px] mb-[98px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <h2>No Posts Found</h2>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key = {post.id} 
           post={post}
          />
        ))
      )}
    </div>
  );
};

export default Blogs;
