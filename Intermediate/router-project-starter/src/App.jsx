import React from 'react';
import "./App.css";
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      <Navbar isLoggedIn = {isLoggedIn} setLoggedIn = {setLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;