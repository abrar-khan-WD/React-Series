import React, { createContext } from "react";
import { baseUrl} from "../baseUrl"

// mko isko export karna hai dsre file me use karne ke liye isliye export karna hai
// step 1
export const AppContext = createContext();

// what i
function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    // data fetching logic can be added here
    async function fetchPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;      
        try{
            const result = await fetch(url);
        }
        catch(error){

        }

    }



    // Snapshot of the context state
    // This is the state that will be shared with all components that consume this context.
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages
    }; 

    // step 2
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );


}

