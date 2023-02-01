import "../../styles/containerCardsItems.css";
import Item from "../componentsitems/Item";

export const ItemList = ({ datos }) => {
  return (
    <div className="containerCardItems">
      {datos.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          imagen={product.imageProduct.firtsImage}
          title={product.title}
          cantidad={product.stock}
          precio={product.price}
        />
      ))}
    </div>
  );
};
