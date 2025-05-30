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

  const [confirmPassword, setConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");  

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
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max w-full">
        <button 
          className={accountType === 'student' ? 'bg-richblack-900 text-richblack-5 rounded-full py-2 px-5 ' : 'bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200 hover:bg-richblack-900 hover:text-yellow-25'}
        onClick={ () => 
          setAccountType("student")}>
          Student</button>

        <button 
          className={accountType === 'instructor' ? 'bg-richblack-900 text-richblack-5 rounded-full py-2 px-5 ' : 'bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200 hover:bg-richblack-900 hover:text-yellow-25'}  
        onClick={ () => 
          setAccountType("instructor")}>
          Instructor</button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-4 mt-6">
        {/* First Name and Last Name */}
        <div className="flex flex-col w-[450px]">
          <div className="flex flex-row gap-4">
            <label className="w-full" >
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                First Name <sup className="text-pink-200" >*</sup>{" "}
              </p>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                required
                onChange={changeHandler}
                value={formData.firstName}
                className="bg-richblack-800 w-full rounded-[0.5rem] p-[12px] mb-4 text-richblack-5 text-[0.875rem] leading-[1.375rem] border border-richblack-700 focus:outline-none focus:border-yellow-25 hover:border-richblack-200 focus:shadow-[0_0_0_2px_rgba(250,204,21,0.5)] transition-all duration-500 "
              />
            </label>

            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                required
                onChange={changeHandler}
                value={formData.lastName}
                className="bg-richblack-800 w-full rounded-[0.5rem] p-[12px] mb-4 text-richblack-5 text-[0.875rem] leading-[1.375rem] border border-richblack-700 focus:outline-none focus:border-yellow-25 hover:border-richblack-200 focus:shadow-[0_0_0_2px_rgba(250,204,21,0.5)] transition-all duration-500 "
              />
            </label>
          </div>


          {/* Email */}

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>{" "}
            </p>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              required
              onChange={changeHandler}
              value={formData.email}
              className="bg-richblack-800 w-full rounded-[0.5rem] p-[12px] mb-4 text-richblack-5 text-[0.875rem] leading-[1.375rem] border border-richblack-700 focus:outline-none focus:border-yellow-25 hover:border-richblack-200 focus:shadow-[0_0_0_2px_rgba(250,204,21,0.5)] transition-all duration-500 "
            />
          </label>


          <div className="flex flex-row gap-4">
            {/* Password*/}
            <label className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Password <sup className="text-pink-200">*</sup>{" "}
              </p>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                required
                onChange={changeHandler}
                value={formData.password}
                className="bg-richblack-800 w-full rounded-[0.5rem] p-[12px] mb-4 text-richblack-5 text-[0.875rem] leading-[1.375rem] border border-richblack-700 focus:outline-none focus:border-yellow-25 hover:border-richblack-200 focus:shadow-[0_0_0_2px_rgba(250,204,21,0.5)] transition-all duration-500 "
              />
              <span className="absolute right-3 top-[42px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible fontSize={18} fill="#AFB2FB" /> :
                  <AiOutlineEye fontSize={18} fill="#AFB2FB" />}
              </span>
            </label>

            {/* <!--Confirm Password--> */}
            <label className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Confirm Password <sup className="text-pink-200">*</sup>{" "}
              </p>
              <input
                type={confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confim your Password"
                required
                onChange={changeHandler}
                value={formData.confirmPassword}
                className="bg-richblack-800 w-full rounded-[0.5rem] p-[12px] mb-4 text-richblack-5 text-[0.875rem] leading-[1.375rem] border border-richblack-700 focus:outline-none focus:border-yellow-25 hover:border-richblack-200 focus:shadow-[0_0_0_2px_rgba(250,204,21,0.5)] transition-all duration-500 "
              />
              <span className="absolute right-3 top-[42px] cursor-pointer"
                onClick={() => setConfirmPassword(!confirmPassword)}
              >
                {
                  confirmPassword ? <AiOutlineEyeInvisible fontSize={18} fill="#AFB2FB" /> :
                    <AiOutlineEye size={18} fill="#AFB2FB" />
                }
              </span>
            </label>
          </div>

        </div>

        <button
          className="bg-yellow-50 w-full rounded-[8px] py-[12px] text-richblack-900 text-[1rem] font-medium leading-[1.375rem] border border-transparent hover:bg-yellow-50 transition-all duration-200"
          onSubmit={submitHandler}>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
