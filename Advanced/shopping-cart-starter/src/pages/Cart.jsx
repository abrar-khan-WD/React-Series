import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

 return (
  <div className="mt-32 mb-32">
    <div className="flex flex-row max-w-[1200px] mx-auto px-4 gap-20">
      {cart.length > 0 ? (
        <>
          <div className="flex flex-row flex-wrap gap-5 w-[60%] h-[100%]">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between w-[40%]" >
            <div className="flex flex-col gap-5 ">
               <div className="font-semibold text-xl text-green-800 uppercase ">Your Cart</div>
               <div className="font-semibold text-5xl text-green-700  -mt-5 uppercase"> Summary</div>
            <p className="mb-1 text-xl">
              Total Items: <span className="text-gray-700 font-semibold text-xl">{cart.length}</span>
            </p>
            <div className="flex flex-col">
               <p className="text-xl">
              Total Amount: <span className="text-gray-700 font-semibold">${totalAmount}</span>
            </p>
            </div>
           
            <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
              Checkout
            </button>
            </div>
           
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center w-full">
          <h2 className="text-gray-700 font-semibold text-xl mb-2 flex flex-row items-center justify-center uppercase">
            <HiOutlineEmojiSad className="text-2xl mr-2 " />
            Your Cart is Empty
          </h2>
          <NavLink to="/">
            <button className="bg-green-600 uppercase hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider" >
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  </div>
);

};

export default Cart;
