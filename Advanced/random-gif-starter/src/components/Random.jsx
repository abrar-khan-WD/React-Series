import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner"; // Assuming you have a Spinner component
import hook from "../hooks/useGif";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-[#4ADE80] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] py-4">
      <h1 className="text-3xl underline uppercase mt-[25px] font-bold">
        A Random GIF
      </h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="600" height="400" alt="Random GIF" />)
      }
      <button
        className="w-5/12 bg-white rounded-lg text-center mt-[10px] px-10 py-2 text-xl font-bold hover:bg-gray-200 transition-all duration-300 "
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
