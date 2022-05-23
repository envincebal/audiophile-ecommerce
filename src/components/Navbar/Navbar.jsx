import React from 'react';
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <img src={Logo} alt="logo"/>
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
      <img src={Cart} alt="cart" />
    </nav>
  )
}

export default Navbar