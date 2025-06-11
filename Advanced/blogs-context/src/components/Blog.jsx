import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blog = () => {
  // Consume the context here if needed
  const { loading, post } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[650px] py-3 flex flex-col gap-y-7 mx-auto mt-[80px]">
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>
          <h2>No Post Available</h2>
        </div>
      ) : (
        post.map((singlePost) => (
          <div
           key={singlePost.id}>

            <p className="font-bold text-xs py-2">
              {singlePost.title}</p>
            <p className="text-[10px] mb-1" >
              By <span className="italic">{singlePost.author}</span> on <span className="underline font-bold">{singlePost.category}</span>
            </p>
            <p className="text-[10px] mb-4">
              Posted On <span>{singlePost.date}</span>
            </p>
            <p className="text-[12px] mb-4 leading-5">
              {singlePost.content}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] underline text-blue-500 mb-2">

              {
                singlePost.tags.map((singleTag, index) => {
                  return <span key={index} >{`#${singleTag}`}</span>
                })
              }
            </div>
          </div>
        ))
      )}
      <div className="w-full h-[2px] bg-gray-300 mt-4 mb-10"></div>
        
    </div>
  );
};

export default Blog;
