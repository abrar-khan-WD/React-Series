import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"; // Assuming you have a logo image in the assets folder
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (

        <div className="flex items-center px-4 py-2 bg-[#000] shadow-sm">
            <Link to="/">
                <img src={logo} height={32} width={160} loading="lazy" alt="Image Not Founds" />
            </Link>

            <nav className="flex gap-4 ml-auto">
                <ul className="flex gap-16">
                    <li className="text-white">
                        <Link to="/">Home</Link>
                    </li>
                     <li className="text-white">
                        <Link to="/">About</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/">Contact</Link>
                    </li>

                </ul>
            </nav>

            {/* Login , Signup, LogOut, Dashboard */}

            <div className="flex gap-4 ml-auto">
                {
                    !isLoggedIn &&
                    <Link to={"/login"} className="bg-blue-500 text-white px-4 py-2 rounded">
                        <button>
                            Login
                        </button>
                    </Link>
                }

                {
                     !isLoggedIn &&
                    <Link to={"/signup"} className="bg-blue-500 text-white px-4 py-2 rounded">
                        <button>
                            Signup
                        </button>
                    </Link>
                }

                {
                     isLoggedIn &&
                    <Link to={"/"} className="bg-blue-500 text-white px-4 py-2 rounded">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged out successfully", {
                                position: "top-right",
                               style: { marginTop: "50px" }, // Add this line for top spacing
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }}>
                            Logout
                        </button>
                    </Link>
                }

                {
                     isLoggedIn &&
                    <Link to={"/dashboard"} className="bg-blue-500 text-white px-4 py-2 rounded">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;