import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../componentsitems/ItemList"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

function categoriTitleName(cat){
  switch(cat){
    case 'procesador':
      return "Procesadores";
    case 'placa madre':
      return "Placas madre";
    case 'fuente':
      return "Fuentes";
    case 'placa de video':
      return "Placas de Video";
  }
}

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  let { idCategory } = useParams();

  useEffect(() => {
    if(idCategory)
      document.title = categoriTitleName(idCategory);
    else
      document.title = "Todos los productos";
    
    // Filtra los productos por categoria
    var ref = null
    const querydb = getFirestore();
    const col = collection(querydb, "Productos")
    if(idCategory)
      ref = query(col,where("type", "==", idCategory))
    else ref = col
    getDocs(ref).then(res => {
      setDatos(res.docs.map(product => ({id: product.id, ...product.data() })))
    })
  }, [idCategory])

  return (
    <ItemList datos={datos}/>
  );
};

export default ItemListContainer;