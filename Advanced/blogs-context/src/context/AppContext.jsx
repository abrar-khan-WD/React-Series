import { createContext } from "react";
import { toast } from "react-toastify";
import React, { useState } from "react";
import {baseUrl} from "../baseUrl";


export const AppContext = createContext();


export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [post, setPost] = useState([]);
    const [totalPage, setTotalPage] = useState(null);

    // data filling through api call
    async function fetchData(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if (tag){
           url += `&tag=${tag}`
        }
        if(category){
            url += `&category = ${category}`
        }
        try{
            const result = await fetch(url);
            const data = await result.json()
            console.log(data);
            setPage(data.page)
            setPost(data.posts)
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

    function pageChangeHandler(page){
        setPage(page);
        fetchData(page);
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
        pageChangeHandler
    }; 

  return(
    <AppContext.Provider value ={value}>
            {children}
        </AppContext.Provider>
  )
}