import React from "react";
import { filterData } from "../data";

const Filter = ({ data }) => {
    return(
        <div>
            {
                filterData.map((data,index)=>{
                    return(
                        <button key={data.id}>
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Filter; 