import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {

    const { page, pageChangeHandler, totalPage } = useContext(AppContext);
    return (
        <div className="w-full flex justify-center items-center bg-white py-4 border-t-2 border-gray-300 mt-20 fixed z-50 bottom-0 left-0">
            <div className="w-11/12 max-w-[670px] flex items-center justify-between">
            <div className="flex items-center gap-4">
                {
                    page > 1 &&
                    (
                        <button
                         className="px-4 py-1 border rounded-md text-[14px] hover:bg-slate-100 transition-all ease-in-out 0.5s outline-none "
                            onClick={() => pageChangeHandler(page - 1)}
                        >
                            Previous
                        </button>
                    )

                }

                {
                    page < totalPage &&
                    (
                        <button
                         className="px-4 py-1 border rounded-md text-[14px] hover:bg-slate-100 transition-all ease-in-out 0.5s outline-none "
                            onClick={() => pageChangeHandler(page + 1)}
                        >
                            Next
                        </button>
                    )

                }
            </div>
                

                    <p className="text-sm font-bold " >
                        Page {page} of {totalPage}
                    </p>

            </div>
        </div>
    )
}

export default Footer;