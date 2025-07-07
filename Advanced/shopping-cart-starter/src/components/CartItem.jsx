import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";



const CartItem = ({ item }) => {
    
    return(
        <div>
            <div>
                <img src = {item.image} alt = {item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div>
                    <p>Price <span>{item.price}</span></p>
                    <div>
                        
                        <RiDeleteBin6Line />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;