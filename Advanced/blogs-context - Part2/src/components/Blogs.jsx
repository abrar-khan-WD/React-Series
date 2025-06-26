import React from "react";
import { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[635px] h-full flex flex-col gap-y-3 justify-center items-center p-3 mt-16 mb-20 ">
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
