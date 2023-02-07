import React, { useState } from "react";

const ItemCount = ({ stock, txt, onAdd }) => {
  const [count, setCount] = useState(1);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="ItemCount">
      <span>Quiero:</span>
      <div className="d">
        <button id="quitar" onClick={decrease} disabled={count === 1}>
          -
        </button>
        <span className="cantTxt"> {count} unidades</span>
        <button id="aumentar" onClick={increase} disabled={count === stock}>
          +
        </button>
      </div>
        <button onClick={()=> onAdd(count)} id="detalles">{txt}</button>    
    </div>
  );
};

export default ItemCount;
