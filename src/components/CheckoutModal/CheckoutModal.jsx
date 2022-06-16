import React from 'react';
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./CheckoutModal.scss";
import { clearCart } from "../../features/cart/cartSlice";

const CheckoutModal = () => {
  const {cartItems, subTotal, vatCost} = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const shippingCost = 50;
  const totalCost = subTotal + shippingCost + vatCost;

  const payBtn = () => {
    dispatch(clearCart());
    localStorage.removeItem("productInfo");
  } 

  return (
    <div className="checkout-modal">
      <img className="checkout-img" src="../../assets/checkout/icon-order-confirmation.svg" alt="confirm" />
      <h2 className="thanks-title">THANK YOU <br /> FOR YOUR ORDER</h2>
      <p className="confirm-desc">You will receive an email confirmation shortly.</p>
      <div className="items-summary">
        <ul className="items-list">
          {cartItems.map(item => {
            return <li key={item.id}>
            <div className="item-cart-info">
              <img className="item-cart-img" src={`../.${item.img}`} alt="thumbnail"/>
              <div className="item-cart-desc">
                <p className="name">{item.name}</p>
                <p className="price">$ {item.price}</p>
              </div>
            </div>
            <p className="summary-item-count">x{item.count}</p>
          </li>
          })}
        </ul>
        <div className="grand-total">
          <div className="total-info">
             <p className="total-title">GRAND TOTAL</p>
          <p className="total-cost">$ {totalCost}</p>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <Button onClick={payBtn} type={"type-1"} text={"BACK TO HOME"} />
      </Link>
    </div>
  )
}

export default CheckoutModal