import "./App.css";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    comments: false,
    candidates: false,
    offers: false,
    everything: false,
    sameasemail: false,
    nopushnotifications: false
  });

  function changeHandler(event) {
    const { name, type, checked, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked :
        type === "radio" ? name : value
    }));
  }


  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    alert("Form submitted successfully");
  }

  return (
    <div className="flex flex-col items-center mt-[10px] h-[full] bg-gray-100">
      <form onSubmit={submitHandler} className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-[30vw]">

        <label htmlFor="fname" className="text-1xl ml-[10px]">Name</label>
        <br />
        <input type="text" name="firstName" id="fname" placeholder="Enter Your name" value={formData.firstName} onChange={changeHandler}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" />
        <br /><br />

        {/* Last Name */}

        <label htmlFor="lname" className="text-1xl ml-[10px]">Last Name</label>
        <br />
        <input type="text" name="lastName" id="lname" placeholder="Enter Your last name" value={formData.lastName} onChange={changeHandler}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" />
        <br /><br />

        {/* Email */}

        <label htmlFor="email" className="text-1xl ml-[10px]">Email</label>
        <br />
        <input type="text" name="email" id="email" placeholder="abrar@gmail.com" value={formData.email} onChange={changeHandler}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" />
        <br /><br />

        {/* Country */}
        <label htmlFor="country" className="text-1xl ml-[10px]">Country</label>
        <br />

        <select name="country" id="country" className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" value={formData.country} onChange={changeHandler}>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Nepal">Nepal</option>
        </select>
        <br /><br />

        {/* Steert Adress */}

        <label htmlFor="street" className="text-1xl ml-[10px]">Street Adress</label>
        <br />
        <input type="text" name="street" id="street" placeholder="Street Adress" value={formData.street} onChange={changeHandler}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" />
        <br /><br />

        {/* City */}

        <label htmlFor="city" className="text-1xl ml-[10px]">City</label>
        <br />
        <input type="text" name="city" id="city" placeholder="City" value={formData.city} onChange={changeHandler}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" />
        <br /><br />

        {/* State/Province */}

        <label htmlFor="state" className="text-1xl ml-[10px]">State</label>
        <br />
        <input type="text" name="state" id="state" placeholder="state" value={formData.state} onChange={changeHandler}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" />
        <br /><br />

        {/* {Zip/Postal Code} */}

        <label htmlFor="zipCode" className="text-1xl ml-[10px]">Zipcode</label>
        <br />
        <input type="text" name="zipcode" id="zipCode" placeholder="411042" value={formData.zipcode} onChange={changeHandler}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[15vw]" />
        <br /><br />

        {/* By Email */}

        <fieldset>

          <legend className="text-1xl ml-[10px]">By Email</legend>

          <div className="flex gap-2 flex-row ml-[5px]">
            <input type="checkbox" name="comments" id="comments" checked={formData.comments} className="ml-[5px]" onChange={changeHandler} />
            <label htmlFor="comments" className="text-sm mt-[18px]"><b>Comments</b><br />
              <span className="text-gray-500">  Get notified when someone posts a comment on posting</span>
            </label> <br /><br />
          </div>


          <div className="flex gap-2 flex-row ml-[5px]">
            <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} className="ml-[5px]" onChange={changeHandler} />
            <label htmlFor="candidates" className="text-sm mt-[18px]"><b>Candidates</b><br />
              <span className="text-gray-500"> Get notified when a candidate applies for a job.

              </span>
            </label> <br /><br />
          </div>


          <div className="flex gap-2 flex-row ml-[5px]">
            <input type="checkbox" name="offers" id="offers" checked={formData.offers} className="ml-[5px]" onChange={changeHandler} />
            <label htmlFor="offers" className="text-sm mt-[18px]"><b>Offers</b><br />
              <span className="text-gray-500"> Get notified when a candidate accepts or rejects an offer.

              </span>
            </label> <br /><br />
          </div>

        </fieldset>


        {/* Push Notification */}

        <fieldset className="mt-[20px]">

          <legend className="text-1xl ml-[10px]">Push Notifications</legend>
          <span className="text-[14px] text-gray-500 text-center ml-[15px]">These are delivered via SMS to your mobile phone</span>
          <div className="flex gap-2 flex-row ml-[5px]">
            <input type="radio" name="everything" id="everything" value={formData.everything} className="ml-[5px]" onChange={changeHandler} />
            <label htmlFor="everything" className="text-sm mt-[18px]"><b>Everything</b><br />
            </label> <br /><br />
          </div>


          <div className="flex gap-2 flex-row ml-[5px]">
            <input type="radio" name="sameasemail" id="sameasemail" value={formData.sameasemail} className="ml-[5px]" onChange={changeHandler} />
            <label htmlFor="sameasemail" className="text-sm mt-[18px]"><b>Same as email</b><br />

            </label> <br /><br />
          </div>


          <div className="flex gap-2 flex-row ml-[5px]">
            <input type="radio" name="nopushnotifications" id="nopushnotifications" value={formData.nopushnotifications} className="ml-[5px]" onChange={changeHandler} />
            <label htmlFor="nopushnotifications" className="text-sm mt-[18px]"><b>No push notifications</b><br />
              <span className="text-gray-500"> Get notified when a candidate accepts or rejects an offer.

              </span>
            </label> <br /><br />
          </div>

        </fieldset>

        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-[20px] ml-[10px] hover:bg-blue-700" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default App;
