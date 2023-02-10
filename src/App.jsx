import "./style.css";
import React from "react";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/componentsitems/ItemListContainer ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/componentsitems/ItemDetailContainer";  
import CartProvider from "./Context/CartContext";
import { Cart } from "./components/componentsitems/Cart";
import Form from "./components/CheckoutForm";
import NotFound from "./components/NotFound404"

function App() {
  return (
    <BrowserRouter>
      <CartProvider value>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/item/:idItem"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/cart" element={<Cart/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route exact path="/checkout" element={<Form />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

