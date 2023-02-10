import Image from "./Image";
import "../../styles/cardItem.css";
import Description from "./Description";
import AddItemButton from "./AddItemButton";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

// data productData = {id,imagen,title,cantidad,precio}
// data referencing Product to render.
const Item = ({productData, viewCartMode}) => {
  const { removeProduct } = useCartContext();
  const handleRemove = (productData) => {
    removeProduct(productData.id);
  };
  

  return (
    <div className="cardItem">
      <Image imagen={productData.imageProduct} />
      <Description
        title={productData.title}
        cantidad={viewCartMode ? productData.quantity : productData.stock}
        precio={productData.price}
      />
      <div className="buttons">
        <Link to={`/item/${productData.id}`}>
          <button className="detalles">Ver detalles</button>
        </Link>

        {
          viewCartMode ?
          <button className="detalles-quitar" onClick={()=>{handleRemove(productData)}}>
              Quitar
          </button>
          :
          <AddItemButton product={productData}/>
        }
      </div>
    </div>
  );
};

export default Item;
