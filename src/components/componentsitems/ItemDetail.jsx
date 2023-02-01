import Image from "./Image";
import Description from "./Description";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./Buttondetalles";

const ItemDetail = ({ datos }) => {
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
            <AddCantCart cant={5} stock={datos.stock} />
            <ButtonDetalles txt="Agregar al carrito" />
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemDetail;
