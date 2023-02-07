import cart from "../../img/cart.svg";
import CartContext from "../../Context/CartContext";

const CartWidget = () => {
  return (
    <div className="containerLength">
      <img src={cart} alt="cart"></img>
      <span className="cantCart">1</span>
    </div>
  );
};

export default CartWidget;
