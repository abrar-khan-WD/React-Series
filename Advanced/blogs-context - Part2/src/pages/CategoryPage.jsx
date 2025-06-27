import React from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const CategoryPage = () => {
    const navigation = useNavigate();
    // Extracting the category value from the URL
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    const {fetchBlogPosts} = useContext(AppContext);

    useEffect(() => {
        // Fetch blog posts for the specific category
        console.log("Category from URL:", category);
        fetchBlogPosts(1, null, category);
    }, [category, location.pathname]);

    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}>
                    Back
                </button>
                <div>
                    <h2> Blogs On 
                        <span>
                            #{category}
                        </span>
                    </h2>
                </div>
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default CategoryPage;