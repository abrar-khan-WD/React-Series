import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc";


const Template = ({ title, desc1, desc2, formtype, image, setLoggedIn }) => {
    return (
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 ">
            <div>
                <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                   
                    <span className="text-richblack-100">{desc1}</span>
                     <br/>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {
                    formtype === "signup" ? (<SignupForm setLoggedIn={setLoggedIn} />) : (<LoginForm setLoggedIn={setLoggedIn} />)
                }

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                   <div className="w-full h-[1px] bg-richblack-700"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle className="text-2xl" />
                    <p>Sign Up with Google</p>
                </button>
            </div>


            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} alt="frame"
                    height={504} width={558}
                    loading="lazy"
                    
                />
                <img src={image} alt="Students"
                    height={490} width={558} 
                    className="absolute -top-4 right-4 z-[1] pointer-events-none"
                    />
            </div>


        </div>
    );
}

export default Template;