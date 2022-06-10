import React, {useState} from 'react';
import Modal from "../Modal/Modal";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [modalToggle,
    setModalToggle] = useState(false);
  const {subTotal, cartItems} = useSelector(store => store.cart);

  return (
    <div>
      <nav className="navbar">
        <Link to={"/"}>
          <img src={"/assets/shared/desktop/logo.svg"} alt="logo"/>
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
        <div className="cart-icon" onClick={() => setModalToggle(prev => !prev)}>
          {cartItems.length > 0 && (
            <div className="item-counter">{cartItems.length}</div>
          )}

        </div>
        {modalToggle && (<Modal subTotal={subTotal} itemsLength={cartItems.length} />)}
      </nav>
    </div>
  )
}

export default Navbar