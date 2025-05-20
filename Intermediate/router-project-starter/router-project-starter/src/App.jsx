import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";


const App = () => {
 // Check if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);


  return(
    <div className="">
      <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />

      <Routes>
        <Route path = "/" element ={<Home/>} />
        <Route path = "/login" element ={<Login/>} />
        <Route path = "/signup" element ={<Signup/>} />
        <Route path = "/dashboard" element ={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App;