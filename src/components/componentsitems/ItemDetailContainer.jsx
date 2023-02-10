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
    let productId = window.location.pathname.substring(6,window.location.pathname.length)
    console.log(productId)
    const db = getFirestore();
    const query_doc = doc(db, 'Productos', productId)
    // const q = query(productos_ref, where('id', '==', productId));
    getDoc(query_doc).then(res => {
      // Agrega id a los datos del producto recibidos de firebase
      let temp_datos = res.data()
      // Id necesario para enviar al checkout y registrar en DB.
      temp_datos['id'] = productId
      setDatos(temp_datos)
    })
  }, [idItem]);
  console.log(datos)

  return (
    <>
      <ItemDetail datos={datos} setCart={setCart}/>
    </>
  );
};

export default ItemDetailContainer;
