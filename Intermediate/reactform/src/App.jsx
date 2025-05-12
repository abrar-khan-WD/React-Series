import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  function changeEventHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  // console.log(formData.firstName);
  // console.log(formData.lastName);
  // console.log(formData.email);
  // console.log(formData.comments);

  console.log(formData);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your first name"
        name="firstName"
        onChange={changeEventHandler}
        value={formData.firstName} // Controlled component
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your last name"
        name="lastName"
        onChange={changeEventHandler}
        value={formData.lastName} // Controlled component
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        onChange={changeEventHandler}
        value={formData.email} // Controlled component
      />
      <br />
      <br />  

      <textarea rows={10} cols={30} placeholder="Enter your message" onChange={changeEventHandler} name="comments" value={formData.comments} >
      

      </textarea>
     

    </div>
  );
};

export default App;
