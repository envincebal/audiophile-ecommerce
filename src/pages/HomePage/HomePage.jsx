import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ZX9 from "../../assets/home/desktop/image-speaker-zx9.png";

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
            <p className="hero-text">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.</p>
            <Button text={"SEE PRODUCT"} type={"type-1"}/>
          </div>
        </header>
      </div>
      <CategoryCards/>
      <section className="home-product container">
        <div className="home-product-ZX9">
          <img className="ZX9-img" src={ZX9} alt={ZX9}/>
          <div className="ZX9-info">
            <h1 className="ZX9-title">ZX9 SPEAKER</h1>
            <p className="ZX9-desc">Upgrade to premium speakers that are phenomenally built
              to deliver truly remarkable sound.</p>
            <Button text={"SEE PRODUCT"} type={"type-3"}/>
          </div>
        </div>
        <div className="home-product-ZX7">
          <div className="ZX7-info">
            <h1 className="ZX7-title">ZX7 SPEAKER</h1>
            <Button text={"SEE PRODUCT"} type={"type-2"}/>
          </div>
        </div>
        <div className="home-product-YX1">
          <div className="YX1-img"></div>
          <div className="YX1-info">
            <div className="YX1-content">
              <h1 className="YX1-title">YX1 EARPHONES</h1>
              <Button text={"SEE PRODUCT"} type={"type-2"}/>
            </div>

          </div>
        </div>
      </section>
    </div>

  )
}

export default HomePage