import React from "react";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import Support from "./components/Support";
import Mainheader from "./components/Mainheader";


const App = () => {
  return(
    <div className="App">

      <nav className="navbar"> 
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/support" className="nav-link" activeClassName="active-link">Support</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
          </li>
          <li>
            <NavLink to="*" className="nav-link" activeClassName="active-link">404 Error</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/" element={<Mainheader/> } >
        <Route index element={<Home/>} />  
        {/* This is the default route */}
        <Route path="/about" element={<About/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/contact" element={<Contact/>}/>
        </Route>
         <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App;