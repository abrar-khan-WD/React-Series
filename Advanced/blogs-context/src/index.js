import React from "react";
import ReactDOM from "react-dom/client";
import AppContextProvider from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <AppContextProvider>    
         <ToastContainer/>   
        <App />
        </AppContextProvider>
);
