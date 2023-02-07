import "./style.css";
import React from "react";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/componentsitems/ItemListContainer ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/componentsitems/ItemDetailContainer";
import { useState } from "react";   
import CartProvider from "./Context/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <BrowserRouter>
      <NavBar />
      <CartProvider value>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/item/:idItem"
            element={<ItemDetailContainer setCart={setCart} />}
          />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
