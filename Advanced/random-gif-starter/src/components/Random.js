import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  // Fetches a random gif from the Giphy API
  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await axios.get(url);
      const imageUrl = response.data.data.images.downsized_large.url;
      setGif(imageUrl);
    } catch (error) {
      console.error("Error fetching gif:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg flex flex-col border border-black items-center mt-[15px]">
      <h1 className="text-2xl underline uppercase font-semibold">A Random Gif</h1>
      {gif && <img src={gif} alt="Random Gif" width="450px" />}
      <button
        onClick={clickHandler}
        className="w-7/12 bg-white m-auto text-center px-10 py-2 text-lg rounded-md font-bold uppercase hover:bg-gray-100 transition-all duration-300 ease-out"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
