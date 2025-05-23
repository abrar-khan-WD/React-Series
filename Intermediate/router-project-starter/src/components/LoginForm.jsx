import React from "react";
import { useState } from "react";
import {AioutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

const [showPassword, setShowPassword] = useState(true);

 function changeHandler(e) {
    const {name, value} = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value
    }));
 }

    return(
        <form>
            <label>
                <p>Email Address <sup>*</sup> </p>
                <input type = "email" name = "email" placeholder="Enter your email address" value={formData.email} required 
                 onChange={changeHandler}
                />
              
            </label>

            <label>
            <p>Password <sup>*</sup> </p>
            <input type = {
                showPassword ? "text" : "password"
            } name = "Password" placeholder="Enter your password" value={formData.password} required   />
              <span onClick={() => setShowPassword(!showPassword)} className="eye">
                    {
                    showPassword ? (<AiOutlineEyeInvisible/>) : (<AioutlineEye/>) 
                }
                </span>

                <Link to="#" className="forgot-password">
                    <p>
                        Forgot Password
                    </p>
                </Link>

                <button>
                    Sign In
                </button>

            </label>


        </form>
    )
}
export default LoginForm;