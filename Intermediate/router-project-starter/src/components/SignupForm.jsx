import React from "react";
import { useState } from "react";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function changeHandler(e){
        const [name, value] = e.target;
        setFormData((prevState)=> ({
            ...prevState,
            [name]: value
        }));    
    }
    return(
        <div>
            {/* Student Instructor Tab */}
            <div>
                <button>
                    Student
                </button>

                <button>
                    Instructor
                </button>
            </div>

            <form>
                <label>
                    <p>First Name <sup>*</sup> </p>
                    <input type = "text" name = "firstName" placeholder="Enter your first name" required 
                    onChange={changeHandler} value={formData.firstName} />  
                </label>

                  <label>
                    <p>Last Name <sup>*</sup> </p>
                    <input type = "text" name = "lastName" placeholder="Enter your last name" required 
                    onChange={changeHandler} value={formData.lastName} />  
                </label>
            </form>
        </div>
    )

}