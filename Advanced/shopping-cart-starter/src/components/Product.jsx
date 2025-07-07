import React from "react";
import { useSelector } from "react-redux";


const Product = (props)=> {
    // Destructure the posts object to get the properties
     const {posts} = props;
     const {cart} = useSelector ((state) => state.cart)
  
    return(
        <div>
            <div>
                <p>{posts.title}</p>
            </div>
            <div>
                <p>{posts.description}</p>
            </div>
            <div>
                <img src = {posts.image} alt = "Image Not Found" />
            </div>
            <div>
                <p>{posts.price}</p>
               
            </div>
            <div>
                {

                }
            </div>
        </div>
    )
}

export default Product;