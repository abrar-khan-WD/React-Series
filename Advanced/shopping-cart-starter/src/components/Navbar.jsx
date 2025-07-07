import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img className="h-14"
            src="https://codehelp-shopping-cart.netlify.app/logo.png"
            alt="Image Not Found"
          />
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <MdShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
