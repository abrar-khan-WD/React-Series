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
   toast.success("Login Successful");
   navigate("/dashboard");
 }

    return(
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address <sup>*</sup> </p>
                <input type = "email" name = "email" placeholder="Enter your email address" value={formData.email} required 
                 onChange={changeHandler}
                />
              
            </label>

            <label>
            <p>Password <sup>*</sup> </p>
           
            <input
                type={
                    showPassword ? "text" : "password"
                }
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                required
                onChange={changeHandler}
            />
              <span onClick={() => setShowPassword(!showPassword)} className="eye">
                    {
                    showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) 
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