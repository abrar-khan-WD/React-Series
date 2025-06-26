import React from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
    const navigation = useNavigate();
    // Extracting the category value from the URL
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
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

export default TagPage;