import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;



// add_action('wp_head', function() {
//     echo '<meta name="google-site-verification" content="google185998210ad1854d.html" />' . "\n";
// });
