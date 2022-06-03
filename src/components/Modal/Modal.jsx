import React from 'react';
import "./Modal.scss";
const Modal = () => {
  return (
    <div className="modal container">
      <div className="cart-remove-div">
        <p className="cart">CART {`(${3})`}</p>
        <button className="remove-all-btn">Remove all</button>
      </div>
      <div className="total-div">
        <p className="total">Total</p>
        <p className="total-amount">$</p>
      </div>
      <button className="checkout-btn">CHECKOUT</button>
    </div>
  )
}

export default Modal;