import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"; // Assuming you have a logo image in the assets folder
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;
    return (

        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={logo} height={32} width={160} loading="lazy" alt="Image Not Founds" />
            </Link>

            <nav>
                <ul className="flex text-richblack-100 gap-x-6"> 
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

            <div className="flex items-center gap-x-4"> 
                {
                    !isLoggedIn &&
                    <Link to={"/login"} >
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border border-richblack-700"> 
                            Log in
                        </button>
                    </Link>
                }

                {
                     !isLoggedIn &&
                    <Link to={"/signup"}>
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border border-richblack-700">
                            Signup
                        </button>
                    </Link>
                }

                {
                     isLoggedIn &&
                    <Link to={"/"}>
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border border-richblack-700" 
                        onClick={() => {
                            setLoggedIn(false);
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
                    <Link to={"/dashboard"} >
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;