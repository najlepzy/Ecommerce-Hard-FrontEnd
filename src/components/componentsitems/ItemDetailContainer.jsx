import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/detailsItem.css";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import ItemDetail from "./ItemDetail";
 

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    document.title = 'Detalle del producto'
  },[])

  useEffect(() => {
    fetchSimultion(
      productos.find((flt) => flt.id == idItem),
      2000
    )
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, [idItem]);
  return (
    <>
      <ItemDetail datos={datos} />
    </>
  );
};

export default ItemDetailContainer;
