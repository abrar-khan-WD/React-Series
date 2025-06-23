import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
    const {page, totalPages, pageChangeHandler} = useContext(AppContext);
    return(
        <div className=" bg-white fixed bottom-0 z-50 w-full border shadow-md" >
            <div className="flex flex-row items-center gap-x-10  mx-auto my-2 max-w-[550px] ">
                {   page > 1 &&
                    (<button
                    className="rounded-md border-2 px-3 py-2 gap-x-2 outline-none "
                        onClick={() => 
                        pageChangeHandler(page-1)}>
                        Previous
                    </button>)
                }
                {
                    page < totalPages &&
                    (<button
                      className="rounded-md border-2 px-3 py-2 gap-x-2 outline-none"
                         onClick={() => 
                        pageChangeHandler(page+1)
                    }>
                        Next
                    </button>)
                    
                }
                 <div className="flex flex-end items-center justify-end w-full">
                <p>
                    Page {page} of {totalPages}
                </p>
            </div>
            </div>
           
        </div>
    )
}

export default Pagination;

// 14-19 Shubham API