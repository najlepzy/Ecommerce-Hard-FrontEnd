import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import Swal from 'sweetalert2'
import "../styles/form.css";
import { getFirestore, collection, addDoc, updateDoc, doc} from "firebase/firestore"

function checkEmailRegex(email){
  const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
  return regexEmail.test(email)
}

function sendUpdateItemStockRequests(cart){
  // Uses promise in order to finish looping before cart is modified in next line.
  // Avoids error while being called before clearCart.
  return new Promise((resolve, reject)=>{
    const temp_cart = [...cart];
    console.log(temp_cart)
    temp_cart.forEach(item => {
      const db = getFirestore();
      const item_doc = doc(db, 'Productos', item.id)
      updateDoc(item_doc,{stock: (item.stock - 1) })
    })
    resolve()
  })
}

const Form = () => {
  const { cart, totalPrice, clearCart} = useCartContext();
  const [fieldName, setName] = useState("");
  const [fieldEmail, setEmail] = useState("");
  const [fieldPhone, setPhone] = useState("");
  const [fieldAddress, setAddress] = useState("");
  const displayAlert = (request) => {
    Swal.fire({
      title: 'Has Creado tu Orden',
      text: `ID de seguimiento : ${request.id}`,
      icon: 'success',
      confirmButtonText: 'OK'
    })
  };

  const displayError = (reason) => {
    Swal.fire({
      title: 'Ocurrió un error',
      text: `No pudimos crear tu order: ${reason}`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }


  const submitNewOrder = async () => {
    if (!checkEmailRegex(fieldEmail)){
      displayError("Email Invalido")
      return
    }
    const order = {
      name: fieldName,
      email: fieldEmail,
      phone: fieldPhone,
      adress: fieldAddress,
      total: totalPrice(),
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
    };
    console.log(order)
    const db = getFirestore();
    const ordersCollection = collection(db, "Orders");
    const result = await addDoc(ordersCollection, order);
    setName("")
    setEmail("")
    setPhone("")
    setAddress("")
    await sendUpdateItemStockRequests(cart)
    console.log("CALLING CLEAR CART")
    clearCart()
    displayAlert(result);
  };

  return (
    <div style={{display: 'flex', flexDirection:'column', margin:'8rem', justifyContent:'center', alignItems:'center'}}>
      <form  class="checkout-form" style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <span id="formTitle" style={{fontSize:'36px'}}>Crea tu Orden</span>
        <input
          type="text"
          placeholder="Tu Nombre Completo"
          class="checkout-field"
          onChange={(e) => setName(e.target.value)}
          value={fieldName}
        />
        <input
          type="text"
          placeholder="Tu Mail"
          class="checkout-field"
          onChange={(e) => setEmail(e.target.value)}
          value={fieldEmail}
        />
        <input
          type="text"
          placeholder="Telefono"
          class="checkout-field"
          onChange={(e) => setPhone(e.target.value)}
          value={fieldPhone}
        />
        <input
          type="text"
          placeholder="Dirección"
          className="checkout-field"
          onChange={(e) => setAddress(e.target.value)}
          value={fieldAddress}
        />
          <button 
          id="checkout-submit" 
          onClick={()=>submitNewOrder()} 
          type="button">
            Submit
          </button>
      </form>
    </div>
  );
};

export default Form;
