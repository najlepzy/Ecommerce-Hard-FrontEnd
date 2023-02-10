import cart from "../../img/cart.svg";
import {useCartContext} from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalProducts} = useCartContext()

  return (
    <Link to={`/cart`}>
      <div className="containerLength">
        <img src={cart} alt="cart"></img>
        <span className="cantCart">{totalProducts()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
