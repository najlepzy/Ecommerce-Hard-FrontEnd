import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { ItemList } from "../componentsitems/ItemList"

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  let { idCategory } = useParams();

  useEffect(() => {
    document.title = "Todos los productos";
  });

  useEffect(() => {
    if (idCategory == undefined) {
      fetchSimultion(productos, 2000)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    } else {
      fetchSimultion(
        productos.filter((filter) => filter.type == idCategory),
        2000
      )
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    }
  }, [idCategory]);

  return (
    <ItemList datos={datos}/>
  );
};

export default ItemListContainer;