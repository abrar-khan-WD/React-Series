import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Pagination from "./components/Pagination";


const App = () => {
 const {fetchBlogPosts} = useContext(AppContext);

 useEffect(() => {
    fetchBlogPosts();
  }, []);


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