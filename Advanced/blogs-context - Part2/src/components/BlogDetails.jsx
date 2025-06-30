import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const BlogDetails = ({ post }) => {

  return (
    <div className="flex flex-col gap-y-1 border shadow-md p-4 cursor-pointer" >
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold">{post.title}</span>
      </NavLink>

      <p className="text-xs">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>

      <p className="text-xs pt-1">Posted on <span></span>
        <span>{ post.date}</span></p>

      <p className="pt-4 text-[13px] font-normal">{post.content}</p>

      <div className="flex flex-row gap-x-1 pt-4 text-[13px] font-normal">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`
          }>
            <span className="text-blue-700 underline text-xs">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
