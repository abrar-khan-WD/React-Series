import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slice/CartSlice.jsx";




const Product = (props) => {
    // Destructure the posts object to get the properties
    const { posts } = props;
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch();

    // Add to Cart Logic
    const addToCart = () => {
        dispatch(add(posts));
        toast.success("Added to Cart")
    }

    // Remove from Cart Logic
    const removeFromCart = () => {
        dispatch(remove(posts.id));
        toast.error("Removed from Cart");
    }

    return (
        <div className="flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 rounded-xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] mt-10 ml-5 cursor-pointer ">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
                    {posts.title.split(" ").slice(0,3).join(" ")+ ".."}</p>
            </div>
            <div>
                <p className=" w-40 text-gray-400 font-normal text-[10px] text-left ">
                   {posts.description.split(" ").slice(0,10).join(" ") + "..."}
                </p>
            </div>
            <div className="h-[180px]">
                <img src={posts.image} alt="Image Not Found"
                 className="h-full w-full object-contain"
                />
            </div>
            <div className="flex flex-row items-center w-full justify-between mt-4">
                <p className="text-green-600 font-semibold">${posts.price}</p>

                 {
                    cart.some((p) => p.id == posts.id) ? (
                        <button
                        className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
                        onClick={removeFromCart}>
                            Remove from Cart
                        </button>
                    )
                        : (
                            <button 
                            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
                            onClick={addToCart}>
                                
                                Add to Cart
                            </button>
                        )
                }

            </div>
        </div>
    )
}

export default Product;