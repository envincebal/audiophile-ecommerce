import React from 'react';
import { useSelector } from "react-redux";
import "./CheckoutModal.scss";

const CheckoutModal = () => {
  const {cartItems, subTotal, vatCost} = useSelector(store => store.cart);

  const shippingCost = 50;
  const totalCost = subTotal + shippingCost + vatCost;

  return (
    <div className="checkout-modal">
      <img className="checkout-img" src="../../assets/checkout/icon-order-confirmation.svg" alt="confirm" />
      <h2 className="thanks-title">THANK YOU FOR YOUR ORDER</h2>
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
    </div>
  )
}

export default CheckoutModal