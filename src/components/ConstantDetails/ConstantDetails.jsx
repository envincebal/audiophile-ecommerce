import React from 'react';
import "./ConstantDetails.scss";

const ConstantDetails = () => {
  return (
    <section className="constant-details container">
      <div className="constant-info">
        <h1 className="constant-title">
          BRINGING YOU THE
          <span className="best-span"> BEST </span>
          AUDIO GEAR
        </h1>
        <p className="constant-desc">Located at the heart of New York City, Audiophile
          is the premier store for high end headphones, earphones, speakers, and audio
          accessories. We have a large showroom and luxury demonstration rooms available
          for you to browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the best place to buy
          your portable audio equipment.</p>
      </div>
      <picture>
        <source media="(max-width: 700px)" srcSet={`${process.env.PUBLIC_URL}/assets/shared/mobile/image-best-gear.jpg`}></source>
        <source media="(max-width: 1000px)" srcSet={`${process.env.PUBLIC_URL}/assets/shared/tablet/image-best-gear.jpg`}></source>
        <img
          src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-best-gear.jpg`}
          className="constant-img"
          alt="constant"/>
      </picture>

    </section>
  )
}

export default ConstantDetails