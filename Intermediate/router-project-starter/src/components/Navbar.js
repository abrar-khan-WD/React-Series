import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="flex justify-betweeen p-4 gap-32 ">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav className="navbar">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    <Link to="/login">Login</Link>
                </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                    <Link to="/signup">Sign Up</Link>
                </button>

                <button className="bg-blue-500 text-white px-2 py-2 rounded ml-4">
                    <Link to="/dashboard">Dashboard</Link>

                </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                    <Link to="/dashboard">Logout</Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar;