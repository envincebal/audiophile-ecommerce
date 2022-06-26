import React from 'react';
import MenuModal from "../MenuModal/MenuModal";
import CategoryCards from "../CategoryCards/CategoryCards";
import {useSelector, useDispatch} from "react-redux";
import {toggleCartModal, toggleNavModal} from "../../features/modal/modalSlice";
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  const {cartModal, navModal} = useSelector(store => store.modal);
  const {subTotal, cartItems} = useSelector(store => store.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar">
        <img
          onClick={() => dispatch(toggleNavModal())}
          className="mobile-menu-btn"
          src="../../assets/shared/tablet/icon-hamburger.svg"
          alt="menu icon"/>
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
        <div className="cart-icon" onClick={() => dispatch(toggleCartModal())}>
          {cartItems.length > 0 && (
            <div className="item-counter">{cartItems.length}</div>
          )}
        </div>
        {cartModal && (<MenuModal subTotal={subTotal} itemsLength={cartItems.length}/>)}
      </nav>
      {navModal && (
        <div className="mobile-menu">
          <CategoryCards/>
        </div>
      )}

    </div>
  )
}

export default Navbar