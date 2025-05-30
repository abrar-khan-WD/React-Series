import React from 'react';
import "./App.css";
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute.jsx';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col'>
      <Navbar isLoggedIn = {isLoggedIn} setLoggedIn = {setLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home isLoggedIn = {isLoggedIn}/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn = {isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
          

        } />
      </Routes>
    </div>
  );
}

export default App;