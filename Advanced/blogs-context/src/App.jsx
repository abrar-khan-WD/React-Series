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
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
     
    </div>
  )
}

export default App;