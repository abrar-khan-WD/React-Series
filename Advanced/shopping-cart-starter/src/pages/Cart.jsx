import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
    const {cart} = useSelector((state)=> state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0))
    },[cart])

    return(
        <div>
            <div>
                {
                    cart.length > 0 ? 
                    ( <div>
                         {
                            cart.map((item) => {
                                return <CartItem key = {item.id} item = {item} />
                            })
                         }
                        </div> ) : 
                    (
                        <div>
                            <div>YOUR CART</div>
                            <div>SUMMARY</div>
                            <p>
                                Total Items <span>{cart.length}</span>
                            </p>

                            <div>
                                <p>
                                Total Amount <span>
                                    ${totalAmount}
                                </span>
                            </p>

                            <button>
                                Checkout
                            </button>
                            </div>
                            <div>
                                <h2>Your Cart is Empty</h2>
                                <NavLink to = "/">
                                    <button>Shop Now</button>
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart;