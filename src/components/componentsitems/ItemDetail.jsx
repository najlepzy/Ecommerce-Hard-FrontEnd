import Image from "./Image";
import Description from "./Description";
import ItemCount from "./ItemCount";
import ButtonDetalles from "./Buttondetalles";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ datos }) => {
  const [inputType, setInputType] = useState('input')
  const [quantity, setQuantity] = useState(0)
  
  const ItemCount = inputType === 'input' ? InputCount : ButtonCount
  const handleOnAdd = (quantity) => {
    console.log("Agregue al carrito", quantity);

    setQuantity(parseInt(quantity));
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
            {
              quantity > 0 ? (
                <Link to='/cart'>Terminar compra</Link>
              ):(
                <ItemCount stock={datos.stock} onAdd={handleOnAdd}/>
              )
            }
           
            <ButtonDetalles txt="Agregar al carrito" />
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemDetail;
