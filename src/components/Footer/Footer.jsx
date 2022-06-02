import React from 'react';
import {Link} from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container">
        <div className="footer-nav">
          <img src={"/assets/shared/desktop/logo.svg"} alt="logo" />
          <ul className="footer-links">
            <li className="footer-link-item">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="footer-link-item">
              <Link to={"/headphones"}>HEADPHONES</Link>
            </li>
            <li className="footer-link-item">
              <Link to={"/speakers"}>SPEAKERS</Link>
            </li>
            <li className="footer-link-item">
              <Link to={"/earphones"}>EARPHONES</Link>
            </li>
          </ul>
        </div>
        <div className="footer-desc">
          <p className="footer-text">Audiophile is an all in one stop to fulfill your
            audio needs. We're a small team of music lovers and sound specialists who are
            devoted to helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.</p>
          <div className="social-media">
            <img className="social-icon" src={"/assets/shared/desktop/logo.svg"} alt="facebook icon"/>
            <img className="social-icon" src={"/assets/shared/desktop/icon-instagram.svg"} alt="instragram icon"/>
            <img className="social-icon" src={"/assets/shared/desktop/icon-twitter.svg"} alt="twitter icon"/>
          </div>
        </div>
        <p className="copyright">Copyright 2022. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer