import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { AppContext } from "./context/AppContext";



const App = () => {
 const {fetchBlogPosts} = useContext(AppContext);

 useEffect(() => {
    fetchBlogPosts();
  }, []);


  return(
    <div>
      <Header />
      <Blogs />
     
    </div>
  )
}

export default App;