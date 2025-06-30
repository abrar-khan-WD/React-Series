import React, { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  // data filling through api call
  const fetchBlogPosts = async(page = 1,tag,category) => {
    setloading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag) {
      url += `&tag=${tag}`;
    }
    if(category) {
      url += `&category=${category}`;
    }
    console.log("API URL:", url); // Add this line
    
    try {
      const result = await fetch(url);
      const data = await result.json();
      if(!data.posts || data.posts.length === 0) 
         throw new Error("No posts found");
         console.log("Api Response de bhai", data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      }
      
   catch (error) {
  if (error.message === "No posts found") {
    toast.info("No posts found in this category.");
  } else {
    toast.error("Something went wrong while fetching posts.");
  }
  setPosts([]);
  setTotalPages(null);
  setPage(1);
}
    setloading(false);
  } 
    
 
  const pageChangeHandler = (page) => {
    navigate({search: `?page=${page}`})
    setPage(page);
  }

  const value = {
    loading,
    setloading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    pageChangeHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };