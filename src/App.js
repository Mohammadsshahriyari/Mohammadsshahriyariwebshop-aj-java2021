import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Components/ShopPage";
import ShoppingCart from "./Components/ShoppingCart";
import { CartProvider } from "react-use-cart";

function App() {
  const [username, setUsername] = React.useState("");
  const chooseUsername = (username) => {
    setUsername(username);
  };
  return (
    <CartProvider>
      <Routes>
        <Route exact path="/" element={<Home chooseUsername={chooseUsername} />} />
        <Route exact path="/shop" element={<ShopPage username={username} />} />
        <Route exact path="/cart" element={<ShoppingCart username={username} />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
