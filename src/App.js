import React, { useState } from "react";
import "./App.css";
import BuyPage from "./components/BuyPage";
import CartPage from "./components/CartPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <BuyPage addCart={setCartItems} cartItems={cartItems} />
      <CartPage addCart={setCartItems} cartItems={cartItems} />
    </div>
  );
};

export default App;
