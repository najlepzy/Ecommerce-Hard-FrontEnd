import Image from "./Image";
import Description from "./Description";
import ItemCount from "./ItemCount";
import { GoToCart } from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const ItemDetail = ({ datos, setCart }) => {
  const [ButtonDetalles, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const handleOnAdd = (quantity) => {
    setGoToCart(true);
    addProduct(datos, quantity);
  };
  return (
    <div className="detailsItem">
      <>
        <div className="containerLeft">
          <Image imagen={datos.imageProduct?.firtsImage} />
        </div>
        <div className="containerRigth">
          <Description
            title={datos.title}
            parrafo={datos.description}
            cantidad={datos.stock}
            precio={datos.price}
          />
          <div className="buttons">
            <ItemCount stock={datos.stock} onAdd={handleOnAdd} />

            <GoToCart txt='Agregar al carrito'/>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemDetail;
