import React from "react";

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

<<<<<<< HEAD
    function filterHandler(title){
        setCategory(title);
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center" >
            {
                filterData.map((data)=>(
                    <button className="text-lg  px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all 0.2s" 
                    key={data.id}
                    onClick={ () => filterHandler(data.title)}
                    >
=======
    function filterHandler(title) {
        setCategory(title)
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((data)=>(
                    <button 
                    className={`text-lg px-2 py-1 rounded-md font-medium 
                    text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                    ${category === data.title ? "bg-opacity-50" : "bg-transparent"}`}
                   
                    onClick={() => filterHandler(data.title)}
                   
                   key={data.id}>
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
                        {data.title}
                    </button>
                ))
            }
        </div>  
    )

}

export default Filter;