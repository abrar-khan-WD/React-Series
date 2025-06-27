import React from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const TagPage = () => {
    const navigate = useNavigate();
    // Extract tag from the current URL path
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    const {fetchBlogPosts} = useContext(AppContext);

    useEffect(() => {
        // Fetch blog posts based on the tag
        fetchBlogPosts(1, tag, null);
    }, [location.pathname, location.search]);

    return (
        <div>
            <Header />
            <div>   
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
                <h2>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
};

export default TagPage;