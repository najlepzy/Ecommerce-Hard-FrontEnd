import Image from "./Image";
import Description from "./Description";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import ImageLoader from "../loaders/ImageLoader"
import ItemCount from "../componentsitems/ItemCount"
import LineLoader from "../loaders/LineLoader"

const ItemDetail = ({ datos}) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const handleOnAdd = (quantity) => {
    setGoToCart(true);
    addProduct(datos, quantity);
    window.location.assign('/cart')
  };
  
  return (
    <div className="detailsItem">
      <>
        <div className="containerLeft">
          <ImageLoader 
            loading={datos.imageProduct == undefined}
            width={500}
            height={312}
          >
            <Image imagen={datos.imageProduct} />
          </ImageLoader>
        </div>
        <div className="containerRigth">
          <LineLoader loading={datos.title == undefined} amount={1} lines={5} height={33} width={511} innerStyle={{margin: '12px'}}>
            <Description
              title={datos.title}
              parrafo={datos.description}
              cantidad={datos.stock}
              precio={datos.price}
            />
          </LineLoader>
          <div className="buttons">
            <ItemCount
              stock={datos.stock}
              onAdd={handleOnAdd}
              txt="Agregar al carrito"  
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemDetail;
