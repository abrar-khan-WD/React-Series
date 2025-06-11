import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import { AppContext } from "./context/AppContext";
import "./App.css";

const App = () => {
  const {fetchData} = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/blog/:blogId" element = {<BlogPage/>} />
      <Route path = "/category/:category" element = {<CategoryPage/>} />
      <Route path = "/tags/:tag"  element = {<TagPage/>} />
    </Routes>
  );
}

export default App;