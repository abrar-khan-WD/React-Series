import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);

 function changeHandler(e) {
    const {name, value} = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value
    }));
 }

 function submitHandler(e) {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
   setLoggedIn(true);
   localStorage.setItem("isLoggedIn", "true");
   toast.success("Login Successful");
   navigate("/dashboard");
 }

    return(
        <form onSubmit={submitHandler}
         className="flex flex-col gap-4 mt-6"
        >

            <div>
                 <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200" >*</sup> </p>
                <input type = "email" name = "email" placeholder="Enter your email address" value={formData.email} required 
                 onChange={changeHandler}
                 className="bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 text-[0.875rem] leading-[1.375rem] border border-richblack-700 focus:outline-none focus:border-yellow-25 hover:border-richblack-200 focus:shadow-[0_0_0_2px_rgba(250,204,21,0.5)] transition-all duration-500 mb-4"   
                />
              
            </label>

            <label className="w-full relative">
            <p className="text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup> </p>
           
            <input
                type={
                    showPassword ? "text" : "password"
                }
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                required
                onChange={changeHandler}
                className="bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 text-[0.875rem] leading-[1.375rem] border border-richblack-700 focus:outline-none focus:border-yellow-25 hover:border-richblack-200 focus:shadow-[0_0_0_2px_rgba(250,204,21,0.5)] transition-all duration-500 "
            />
              <span className="absolute right-3 top-[94px] cursor-pointer" 
              onClick={() => setShowPassword(!showPassword)}>
                    {
                    showPassword ? (<AiOutlineEyeInvisible fontSize={18} fill="#AFB2FB"/>) : 
                    (<AiOutlineEye fontSize={18} fill="#AFB2FB"/>) 
                }
                </span>
                 

                <Link to="#" className="forgot-password flex justify-end">
                    <p className="text-blue-100 text-[0.75rem] leading-[1.375rem] mt-1">
                        Forgot Password
                    </p>
                </Link>
                </label>
            </div>
           

                <button className="bg-yellow-50 w-full rounded-[8px] py-[12px] text-richblack-900 text-[0.875rem] leading-[1.375rem] font-medium mt-6 hover:bg-yellow-100 transition-all duration-200"
                
                >
                    Sign In
                </button>

           


        </form>
    )
}
export default LoginForm;