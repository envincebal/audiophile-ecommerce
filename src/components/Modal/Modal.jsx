import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import {clearCart, totalPrice} from "../../features/cart/cartSlice";
import "./Modal.scss";

const Modal = ({itemsLength, subTotal}) => {
  const dispatch = useDispatch();
  return (
    <div className="modal container">
      <div className="cart-remove-div">
        <p className="cart">CART {`(${itemsLength})`}</p>
        <button onClick={() => dispatch(clearCart())} className="remove-all-btn">Remove all</button>
      </div>
      
      <div className="total-div">
        <p className="total">Total</p>
        <p className="total-amount">$ {subTotal.toLocaleString("en-US")}</p>
      </div>
      <Link to={"/checkout"}>
        <button className="checkout-btn">CHECKOUT</button>
      </Link>

    </div>
  )
}

export default Modal;