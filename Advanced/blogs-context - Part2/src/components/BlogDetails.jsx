import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const BlogDetails = ({ post }) => {

  return (
    <div className="mt-[50px]" >
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>

      <p>
        By <span>{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>

      <p>Posted on <span>{post.date}</span></p>

      <p>{post.content}</p>

      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`
          }>
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
