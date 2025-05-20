import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
 let loggedIn = props.loggedIn;
 let setLoggedIn = props.setLoggedIn;
 return(
    <div className="flex justify-evenly">
        <Link to="/">
            <img height={32} width={160} src={logo} alt="Logo" loading="lazy"/>
        </Link>

        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/">About</Link>
                </li>
                <li>
                    <Link to = "/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login,Signup,Logout,Dashboard */}
        <div className="flex gap-8 ml-16 mr-3">
            {
                !loggedIn &&
                <Link to = "/login">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Login
                    </button>
                </Link>
            }

            {
                
                !loggedIn &&
                <Link to = "/signup">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Signup
                    </button>
                </Link>
            }

            {
                loggedIn &&
                <Link to = "/">
                    <button onClick={() => {
                        setLoggedIn(false)
                        toast.success("Logged out successfully");
                    }} 
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                </Link>
            }

            {
                loggedIn &&
                <Link to = "/dashboard">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
 )
}

export default Navbar;