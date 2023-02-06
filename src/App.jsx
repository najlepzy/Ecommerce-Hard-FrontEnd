import "./style.css";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/componentsitems/ItemListContainer ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/componentsitems/ItemDetailContainer";
import Skeleton from "react-loading-skeleton";
import CartProvider, { CartContext } from "./Context/CartContext";

function App() {
  return (
    <CartContext.Provider value = 'Cart'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
