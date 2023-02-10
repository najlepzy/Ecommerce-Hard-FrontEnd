import cartWhite from "../../img/cart-white.svg";
import {useCartContext} from "../../Context/CartContext";

const AddItemButton = ({product}) => {

  // Adds CartProvider function into constant to be used inside Component.
  const {addProduct} = useCartContext()

  const addToCart = (product) => {
    addProduct(product,1)
  }

  return (
      <button id="addCart" onClick={()=>addToCart(product)}>
        <img src={cartWhite} alt="add"></img>
      </button>
  );
};

export default AddItemButton;
