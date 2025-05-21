import React from "react";
import { use } from "react";

const LoginForm = () => {
    const[formData, setFormData] = useState({
        email : " ",
        password : " "
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))

    }

    return(
        <form>
            <label htmlFor="email">
                <p>Email Address <sup>*</sup>  </p>
            </label>    
            <input type="email" placeholder="Enter your email address" required value={formData.email} onChange={changeHandler} />
            

            <label htmlFor="password">
                <p>Enter Password <sup>*</sup>  </p>
            </label>    
            <input type={showPassword ? "text" : "password"}
            placeholder="Enter your email address" required value={formData.password} onChange={changeHandler} />
        </form>
    )
}

export default LoginForm;