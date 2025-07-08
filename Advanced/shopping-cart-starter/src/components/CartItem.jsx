import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slice/CartSlice.jsx";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    // Remove from Cart
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed from Cart");
    }

    return (
        <div className="flex flex-row gap-16 items-center border-b py-4 ">

            <div className="w-[30%]">
                <img src={item.image} alt={item.name} className="object-cover"
                />
            </div>

            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                <h1 className="text-xl text-slate-700 font-semibold" >{item.title.split(" ").slice(0,3).join(" ") + "..."}</h1>
                <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                <div className="flex items-center justify-between" >
                    <p className="font-bold text-lg text-green-600" > <span>${item.price}</span></p>

                    <div className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"

                        onClick={removeFromCart}>
                        <RiDeleteBin6Line />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CartItem;