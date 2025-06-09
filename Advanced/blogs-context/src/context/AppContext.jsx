import { createContext } from "react";
import { toast } from "react-toastify";
import React, { useState } from "react";
import {baseUrl} from "../baseUrl";


export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [post, setPost] = useState([]);
  const [totalPage, setTotalPage] = useState(null);

    // data filling through api call
    async function fetchData() {
        setLoading(true);
        let url = `${baseUrl}page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json()
            console.log(data);
            setPost(data.posts)
            setPage(data.page)
            setTotalPage(data.totalPages)
        }
        catch(error){
            toast.error("Something went wrong while fetching data");
            setPage(1);
            setPost([]);
            setTotalPage(null);
        } 
        setLoading(false);
    }

    function pagChangeHandler(page){
        setPage(page);
        fetchData();
    }
 

  // This is th snapshot of the data
  const value = {
    loading,
    setLoading,
    page,
    setPage,
    post,
    setPost,
    totalPage,
    setTotalPage,
    fetchData,
    pagChangeHandler
  };

  return(
    <AppContext.Provider value ={value}>
        {children}
    </AppContext.Provider>
  )
}

export const AppContext = createContext();
