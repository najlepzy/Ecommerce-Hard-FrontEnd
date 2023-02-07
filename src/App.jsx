import "./style.css";
import React from "react";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/componentsitems/ItemListContainer ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/componentsitems/ItemDetailContainer";
import { useState } from "react";   
import CartProvider from "./Context/CartContext";
import { Cart } from "./components/componentsitems/Cart";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <BrowserRouter>
      <CartProvider value>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/item/:idItem"
            element={<ItemDetailContainer setCart={setCart} />}
          />
          <Route exact path="/cart" element={<Cart/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
