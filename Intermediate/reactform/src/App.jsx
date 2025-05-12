import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: " ",
    favCar: "Audi"
  });

  function changeEventHandler(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted");
    console.log(formData);
  }
  console.log(formData);

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
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

      <textarea rows={10} cols={30} placeholder="Enter your message" onChange={changeEventHandler} name="comments"    >
      </textarea>

      <br />
      <br />

      <input type="checkbox" onChange={changeEventHandler} name="isVisible" id="isVisble"
        checked={formData.isVisible} // Controlled component
      />
      <label htmlFor="isVisble">Am I Visible</label>

      <br /><br />

      <input type='radio' name="mode" id="online-mode" onChange={changeEventHandler} value="Online Mode" 
      checked={formData.mode === "Online Mode"} // Controlled component
      />
      <label htmlFor="online-mode">Online Mode</label>

      <br /><br />
      <input type='radio' name="mode" id="offline-mode" onChange={changeEventHandler} value="Offline Mode"
      checked={formData.mode === "Offline Mode"} // Controlled component
      />
      <label htmlFor="offline-mode">Offline Mode</label>

      <br/><br />

   

      <label htmlFor="favCar">Select your favourite car</label>
       <br/><br />
         <select name="favCar" onChange={changeEventHandler} value={formData.favCar} >
        <option value="Audi">Audi</option>
        <option value="Scorpio">Scorpio</option>
        <option value="BMW">BMW</option>

      </select>

      <br/><br />

      <button>
        Submit
      </button>

      </form>
      
    </div>
  );
};

export default App;
