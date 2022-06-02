import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <img src={"/assets/shared/desktop/logo.svg"} alt="logo"/>
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
      <img src={"/assets/shared/desktop/icon-cart.svg"} alt="cart" />
    </nav>
  )
}

export default Navbar