import React from "react";
import Template from "../components/Template";
import loginImage from "../assets/login.png";

const Login = ({ setLoggedIn }) => {
    return(
       <Template
       title="Welcome Back"
       desc1 = "Build Skills for today,tmorrow and beyond"
       desc2 = "Education to future-proof your career"
       image = {loginImage}
       formType="login"
       setLoggedIn={setLoggedIn}
       />
    )
}

export default Login;