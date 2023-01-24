import Brand from "./Brand";
import Category from "./Category";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
        <Category
          itemUno="Procesadores"
          itemDos="Motherboards"
          itemTres="Fuentes"
          itemCuatro="Placas de video"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
