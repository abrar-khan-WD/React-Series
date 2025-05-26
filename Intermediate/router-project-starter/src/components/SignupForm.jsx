import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setLoggedIn(true);
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    } else {
      toast.success("Account Created Successfully");
      navigate("/dashboard");
      const userData = {
        ...formData,
      };
      console.log("User Data:", userData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
    // Here you can handle the form submission, e.g., send data to an API
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      {/* Student Instructor Tab */}
      <div>
        <button>Student</button>

        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* First Name and Last Name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>{" "}
            </p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>{" "}
            </p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>

          {/* Email */}

          <label>
            <p>
              Email Address <sup>*</sup>{" "}
            </p>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              required
              onChange={changeHandler}
              value={formData.email}
            />
          </label>

          {/* Password and Confirm Password */}
          <label>
            <p>
              Password <sup>*</sup>{" "}
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your Password"
              required
              onChange={changeHandler}
              value={formData.password}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="eye"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>{" "}
            </p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confim your Password"
              required
              onChange={changeHandler}
              value={formData.confirmPassword}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="eye"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button onSubmit={submitHandler}>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
