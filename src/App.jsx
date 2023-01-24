import "./style.css";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/componentsitems/ItemListContainer ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/componentsitems/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
