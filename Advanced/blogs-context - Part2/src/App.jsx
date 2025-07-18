import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Pagination from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage";


const App = () => {
 const {fetchBlogPosts} = useContext(AppContext);
 const [searchParams, setSearchParams] = useSearchParams();
 const location = useLocation();
  
    // Fetch blog posts when the component mounts or when the page changes
    // This will also handle fetching posts based on tags or categories
    // by checking the current URL path

 useEffect(() => {
    const page = searchParams.get("page") ?? 1; // ?? by default set to 1

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    }

    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }

    else{
      fetchBlogPosts(Number(page) );
    }

  }, [location.pathname, location.search]);


  return(
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path = "/blog/:blogId" element = {<BlogPage/>}/>
      <Route path = "/categories/:category" element = {<CategoryPage/>}/>
      <Route path = "/tags/:tag" element = {<TagPage/>}/>
    </Routes>
  )
}

export default App;