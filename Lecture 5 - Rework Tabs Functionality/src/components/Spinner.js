import React from "react";
import './Spinner.css'; // Import the CSS file for styling

const Spinner = () => { 
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="spinner-container">
            <div className="spinner"></div>
            <p className="text-bgDark text-lg font-semibold">Loading...</p>
        </div>
        </div>
        
    )
}

export default Spinner;
// CSS for Spinner component    