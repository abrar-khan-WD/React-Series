import React from "react";
import frameImage from "../assets/Frame.png";
import signupImage from "../assets/Signup.png";
import Loginform from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLogin }) => {
    return (
        <div>

            <div>
                <h1>{title}</h1>

                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {
                    formtype === "signup" ? (<SignupForm/>) : (<Loginform/>)
                }

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with google</p>
                </button>

            </div>

            <div>
                <img src={frameImage} alt="Image Not Found" width={558} height={504} loading="lazy" />

                <img src={frameImage} alt="Image Not Found" width={558} height={490} loading="lazy" />

            </div>

        </div>
    )
}

export default Template;