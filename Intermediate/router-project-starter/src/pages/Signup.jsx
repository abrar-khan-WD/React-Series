import React from "react";
import Template from "../components/Template";
import signupImage from "../assets/signup.png";

const Signup = ({setLoggedIn}) => {
    return(
         <Template
       title="Welcome Back"
       desc1 = "Build Skills for today,tmorrow and beyond"
       desc2 = "Education to future-proof your career"
       image = {signupImage}
       formtype="signup"
       setLoggedIn={setLoggedIn}
       />
    )
     
}

export default Signup;