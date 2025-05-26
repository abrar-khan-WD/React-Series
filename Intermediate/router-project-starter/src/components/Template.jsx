import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";


const Template = ({title, desc1, desc2, formtype, image, setLoggedIn} ) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                formtype === "signup" ? (<SignupForm setLoggedIn={setLoggedIn} />) : (<LoginForm setLoggedIn={setLoggedIn} />)
            }

            <div>
                <div></div>
                <span>OR</span>
                <div></div>
            </div>

            <button>
                <p>Sign Up with Google</p>
            </button>

            <div>
                <img src = {frameImage} alt = "frame" 
                height={504} width={558}
                loading="lazy"
                />
                <img src= {image} alt = "Students"
                height={490} width={558}/>
            </div>


        </div>
    );
}

export default Template;