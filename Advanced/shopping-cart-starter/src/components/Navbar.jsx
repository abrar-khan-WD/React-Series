import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../components/Navbar.css"; // Importing the CSS file for Navbar styles


const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="navbar-fixed bg-slate-900 shadow-lg">
      <nav className=" relative flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
         <div className="ml-5">
          <img className="h-14"
            src="https://codehelp-shopping-cart.netlify.app/logo.png"
            alt="Image Not Found"
          />
         </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">

            <div className="relative flex items-center justify-center">
              <MdShoppingCart 
                className="text-2xl text-slate-100 hover:text-green-500 transition duration-300 cursor-pointer"
              />
              
                {
                  cart.length > 0 &&
                  <span
                   className="absolute -top-2 -right-2 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs bg-green-500 animate-bounce"
                  >{cart.length}</span>
                }
          
            </div>

          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
