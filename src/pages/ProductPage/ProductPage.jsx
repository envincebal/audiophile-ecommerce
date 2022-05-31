import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";
import Button from "../../components/Button/Button";

import "./ProductPage.scss";

const ProductPage = () => {

  const location = useLocation();
  const productInfo = location.state.info;

  return (
    <div className="product-page">
      <div className="product-navbar">
        <Navbar/>
      </div>
      <div className="product-div container">
        <div className="product-head">
          <img src={`../.${productInfo[0].image.desktop}`} className="product-img" alt={productInfo[0].name} />
          <div className="product-info">
      {productInfo[0].slug === "xx99-mark-two-headphones" ? <p className="new-product">NEW PRODUCT</p> : ""}
      {productInfo[0].slug === "zx9-speaker" ? <p className="new-product">NEW PRODUCT</p> : ""}
      {productInfo[0].slug === "yx1-earphones" ? <p className="new-product">NEW PRODUCT</p> : ""}
          
    {console.log(productInfo[0].slug)}
     
          <h1 className="product-title">{productInfo[0].name.toUpperCase()}</h1>
          <p className="product-desc">{productInfo[0].description}</p>
          <h6 className="product-price">{`$${productInfo[0].price}`}</h6>
          <div className="product-controls">
            <div className="counter-div">
              <button className="minus-product">-</button>
              <div className="counter">0</div>
              <button className="add-product">+</button>
            </div>
            <Button type={"type-1"} text={"ADD TO CART"}/>
          </div>
        </div>
        </div>

        <div className="product-details">
          <div className="features">
            <h2 className="features-title">FEATURES</h2>
            <p className="features-text">{productInfo[0].features}</p>
          </div>
          <div className="product-box">
            <h2 className="box-title">IN THE BOX</h2>
            <ul className="box-list">
            {
              productInfo[0].includes.map(item => {
                return <li className="box-list-item"><span>{item.quantity}x</span> {item.item}</li>
              })
            }
            </ul>
          </div>
        </div>
        <div className="product-gallery">
          <img className="gallery-img-1" src={`../.${productInfo[0].image.desktop}`} alt="" />  
          <img className="gallery-img-2" src={`../.${productInfo[0].image.desktop}`} alt="" />
          <img className="gallery-img-3" src={`../.${productInfo[0].image.desktop}`} alt="" />
        </div>
        <div className="related-products">
          <h2>YOU MAY ALSO LIKE</h2>
          <div className="related-items-div">
            <div className="related-item">
            <img className="related-img" src={`../.${productInfo[0].others[0].image.desktop}`} alt="" />
            <h2 className="related-title">{productInfo[0].others[0].name}</h2>
            <Link to={`/product/${productInfo[0].others[0].slug}`}>
              <Button type={"type-1"} text={"SEE PRODUCT"}/>
            </Link>
          </div>
          <div className="related-item">
            <img className="related-img" src={`../.${productInfo[0].others[1].image.desktop}`} alt="" />
            <h2 className="related-title">{productInfo[0].others[1].name}</h2>
            <Link to={`/product/${productInfo[0].others[1].slug}`}>
              <Button type={"type-1"} text={"SEE PRODUCT"} />
            </Link>
          </div>
          <div className="related-item">
            <img className="related-img" src={`../.${productInfo[0].others[2].image.desktop}`} alt="" />
            <h2 className="related-title">{productInfo[0].others[2].name}</h2>
            <Link to={`/product/${productInfo[0].others[2].slug}`}>
              <Button type={"type-1"} text={"SEE PRODUCT"} />
            </Link>
          </div>
          </div>
        </div>
      </div>

      <CategoryCards/>
      <ConstantDetails/>
    </div>
  )
}

export default ProductPage