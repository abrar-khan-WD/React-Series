import React from "react";
import { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

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
          <div key={post.id} className="flex gap-y-1 flex-col border shadow-lg p-3 w-full">
            <p className="font-bold text-md gap-y-1">{post.title}</p>
            <p className="text-xs">
              By <span className="text-xs italic gap-y-1">{post.author}</span> on <span className="font-bold underline">{post.category}</span>
            </p>
            <p className="text-xs pt-1">Posted on {post.date}</p>
            <p className="pt-4 text-[14px]">{post.content}</p>
            <div className="flex gap-x-2 pt-2 text-xs text-nowrap ">
              {post.tags.map((tag, index) => {
                return <span className="text-blue-600 underline" key={index}>
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
