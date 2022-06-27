import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, clearCart, minusProduct} from "../../features/cart/cartSlice";
import { toggleCartModal} from "../../features/modal/modalSlice";

import "./MenuModal.scss";

const MenuModal = ({itemsLength, subTotal}) => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(score => score.cart);
  return (
    <div className="modal container">
      {cartItems.length === 0
        ? (
          <p>Your Cart is Currently Empty !!!</p>
        )
        : (
          <div>
            <div className="cart-remove-div">
              <p className="cart">CART {`(${itemsLength})`}</p>
              <button onClick={() => dispatch(clearCart())} className="remove-all-btn">Remove all</button>
            </div>
            <div className="cart-list-div">
              <ul className="cart-list">
                {cartItems.filter((item) => item.id).map(item => {
                  return (
                    <li key={item.id}>
                      <div className="cart-info">
                        <img className="cart-img" src={`../.${item.img}`} alt=""/>
                        <div className="name-price">
                          <p className="name">{item.name}</p>
                          <p className="price">${item.price}</p>
                        </div>
                      </div>
                      <div className="btn-div">
                        <button
                          onClick={() => dispatch(minusProduct({id: item.id, price: item.price, count: item.count}))}className="cart-minus-product">-</button>
                        <div className="cart-counter">{item.count}</div>
                        <button
                          onClick={() => dispatch(addProduct({id: item.id, price: item.price, count: item.count}))}className="cart-add-product">+</button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="total-div">
              <p className="total">Total</p>
              <p className="total-amount">$ {subTotal.toLocaleString("en-US")}</p>
            </div>
            <Link className="checkout-link" to={"/checkout"}>
              <button onClick={() => dispatch(toggleCartModal())} className="checkout-btn">CHECKOUT</button>
            </Link>
          </div>
        )}
    </div>
  )
}

export default MenuModal;