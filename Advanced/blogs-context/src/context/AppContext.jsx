import React, { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { toast } from "react-toastify";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // data filling through api call
  async function fetchBlogPosts(page = 1) {
    setloading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log("New Data", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      toast.error("Something went wrong while fetching posts");
      setPosts([]);
      setTotalPages(null);
      setPage(1);
    }
    setloading(false);
  }

  function pageChangeHandler(page) {
    setPage(page);
    fetchBlogPosts(page);
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