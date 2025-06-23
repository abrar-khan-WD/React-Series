import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./context/AppContext";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <AppContextProvider>
      <App />
      <ToastContainer />
    </ AppContextProvider>
  </BrowserRouter>

);
