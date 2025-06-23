import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./context/AppContext";
import { AppContextProvider } from "./context/AppContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <AppContextProvider>
    <App />
    <ToastContainer/>
  </ AppContextProvider>
);
