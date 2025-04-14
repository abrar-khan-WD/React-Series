import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { use } from "react";
import { useState } from "react";

const App = () => {
  const [courses, setCourses] = useState(null);
  // API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        console.log(output);
        setCourses(output.data);
      }
      catch (error) {
        toast.error("Something went wrong! Please try again later.");
      }
    }
    fetchData();
  }, []);

  return (
    <div>

      <Navbar />

      <Filter filterData={filterData} />

      <Cards />

    </div>
  )
};

export default App;
