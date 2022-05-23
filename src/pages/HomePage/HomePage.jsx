import React from 'react';
import Navbar from "../../components/Navbar/Navbar";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <header className="homepage-header">
          <Navbar/>
          <div className="hero-div container">
            <p className="new-product-text">NEW PRODUCT</p>
            <h1 className="hero-title">XX99 MARK II HEADPHONES</h1>
            <p className="hero-text">  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          </div>
        </header>
      </div>
    </div>

  )
}

export default HomePage