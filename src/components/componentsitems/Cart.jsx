import React from "react";
import { useCartContext } from "../../Context/CartContext";
import Item from "./Item";
import { Link } from "react-router-dom";
import Parse from "../../utils/Parse"

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="container" style={{display: 'flex', flexDirection:'column', marginTop:'25rem', justifyContent:'center', alignItems:'center'}}>
          <p>No hay items en el carrito</p>
          <Link to="/">Seguir comprando</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container" style={{minHeight: "100vh"}}>
        <div className="containerCardItems" style={{display:'flex', flexDirection:'row'}}>
          {cart.map((datos) => (
            <Item key={datos.id} productData={datos} viewCartMode={true}/>
          ))}
        </div>
        <h2 style={{ margin: "1em", color: "black" }}>
          <b>
            {" "}
            Total:{" "}
            <span style={{ color: "blue" }}>
              {Parse.price(totalPrice())}{" "} 
            </span>
          </b>
        </h2>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
          <Link to="/checkout" id="completePurchaseBtn">
            Finalizar compra
          </Link>
        </div>
      </div>
    </>
  );
};
