import React from 'react';
import Modal from "../MenuModal/MenuModal";
import {useSelector, useDispatch} from "react-redux";
import {toggleModal} from "../../features/cart/cartSlice";
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  const {subTotal, cartItems, navModal} = useSelector(store => store.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar">
        <img className="mobile-menu" src="../../assets/shared/tablet/icon-hamburger.svg" alt="menu icon" />
        <Link to={"/"}>
          <img className="logo" src={"/assets/shared/desktop/logo.svg"} alt="logo"/>
        </Link>
        <ul className="nav-links">
          <li className="link-item">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="link-item">
            <Link to={"/headphones"}>HEADPHONES</Link>
          </li>
          <li className="link-item">
            <Link to={"/speakers"}>SPEAKERS</Link>
          </li>
          <li className="link-item">
            <Link to={"/earphones"}>EARPHONES</Link>
          </li>
        </ul>
        <div className="cart-icon" onClick={() => dispatch(toggleModal())}>
          {cartItems.length > 0 && (
            <div className="item-counter">{cartItems.length}</div>
          )}
        </div>
        {navModal && (<Modal subTotal={subTotal} itemsLength={cartItems.length}/>)}
      </nav>
    </div>
  )
}

export default Navbar