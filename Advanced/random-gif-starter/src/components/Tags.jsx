import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner"; // Assuming you have a Spinner component
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tags = () => {
  
  const [tag, SetTag] = useState("money");
  const {gif, loading, fetchData} = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(e) {
    SetTag(e.target.value);
  }

  return (
    <div className="w-1/2 bg-[#60A5FA] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] py-4">
      <h1 className="text-3xl underline uppercase mt-[25px] font-bold">
        Random {tag} GIF
      </h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="600" height="400" alt="Random GIF" />)
      }

      <input type="text"
      placeholder="Enter a tag to search GIFs" value={tag}
      onChange={changeHandler}
        className="w-5/12 bg-white rounded-lg text-center outline-none mt-[10px] px-10 py-2 text-xl font-bold hover:bg-gray-200 transition-all duration-300" 
      />

      <button
        className="w-5/12 bg-white rounded-lg text-center mt-[10px] px-10 py-2 text-xl font-bold hover:bg-gray-200 transition-all duration-300 "
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tags;
