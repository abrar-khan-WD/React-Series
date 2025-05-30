import React from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    
    const { data } = await axios.get(tag ? tagUrl : randomUrl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('car');
    // eslint-disable-next-line
  }, []);

return{gif,loading,fetchData}

}

export default useGif;