import React from "react";
import './Spinner.css'; // Assuming you have a CSS file for styling the spinner

const Spinner = () => {
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="spinner"></div>

        </div>
    )
}

export default Spinner;