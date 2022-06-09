import React from 'react';
import {Link} from "react-router-dom";
import "./Modal.scss";

const Modal = ({items}) => {

  return (
    <div className="modal container">
      <div className="cart-remove-div">
        <p className="cart">CART {`(${items})`}</p>
        <button className="remove-all-btn">Remove all</button>
      </div>
      
      <div className="total-div">
        <p className="total">Total</p>
        <p className="total-amount">$</p>
      </div>
      <Link to={"/checkout"}>
        <button className="checkout-btn">CHECKOUT</button>
      </Link>

    </div>
  )
}

export default Modal;