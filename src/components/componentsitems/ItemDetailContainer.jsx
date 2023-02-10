import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/detailsItem.css";
import ItemDetail from "./ItemDetail";
import { getFirestore,doc, getDoc} from "firebase/firestore"
 
const ItemDetailContainer = ({setCart}) => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    document.title = "Todos los productos";
    const db = getFirestore();
    const query_doc = doc(db, 'Productos', idItem)
    getDoc(query_doc).then(res => {
      // Agrega id a los datos del producto recibidos de firebase
      let temp_datos = res.data()
      // Id necesario para enviar al checkout y registrar en DB.
      temp_datos['id'] = idItem
      setDatos(temp_datos)
    })
  }, [idItem]);
  return (
    <>
      <ItemDetail datos={datos} setCart={setCart}/>
    </>
  );
};

export default ItemDetailContainer;
