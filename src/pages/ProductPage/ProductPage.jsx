import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";
import Button from "../../components/Button/Button";

import "./ProductPage.scss";

const ProductPage = ({products}) => {
  const [others, setOthers] = useState([]);
  const location = useLocation();
  const productInfo = location.state.info;

  useEffect(() => {
    let tempArr = [];
    let othersArr = productInfo.others; 

    othersArr.forEach(el => {
      products.forEach(item => {
        if(item.slug === el.slug){
        tempArr.push(item);
        }
    })
});
setOthers(tempArr);
  },[productInfo.others, products]);
  return (
    <div className="product-page">
      <div className="product-navbar">
        <Navbar/>
      </div>
      <div className="product-div container">
        <div className="product-head">
          <img src={`/${productInfo.image.desktop}`} className="product-img" alt={productInfo.name} />
          <div className="product-info">
      {productInfo.slug === "xx99-mark-two-headphones" ? <p className="new-product">NEW PRODUCT</p> : ""}
      {productInfo.slug === "zx9-speaker" ? <p className="new-product">NEW PRODUCT</p> : ""}
      {productInfo.slug === "yx1-earphones" ? <p className="new-product">NEW PRODUCT</p> : ""}

          <h1 className="product-title">{productInfo.name.toUpperCase()}</h1>
          <p className="product-desc">{productInfo.description}</p>
          <h6 className="product-price">{`$${productInfo.price}`}</h6>
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
            <p className="features-text">{productInfo.features}</p>
          </div>
          <div className="product-box">
            <h2 className="box-title">IN THE BOX</h2>
            <ul className="box-list">
            {
              productInfo.includes.map((item, index) => {
                return <li key={index}className="box-list-item"><span>{item.quantity}x</span> {item.item}</li>
              })
            }
            </ul>
          </div>
        </div>
        <div className="product-gallery">
          <img className="gallery-img-1" src={`/${productInfo.image.desktop}`} alt="" />  
          <img className="gallery-img-2" src={`/${productInfo.image.desktop}`} alt="" />
          <img className="gallery-img-3" src={`/${productInfo.image.desktop}`} alt="" />
        </div>
        <div className="related-products">
          <h2>YOU MAY ALSO LIKE</h2>
          <div className="related-items-div">
            <div className="related-item">
            <img className="related-img" src={`/${productInfo.others[0].image.desktop}`} alt="" />
            <h2 className="related-title">{productInfo.others[0].name}</h2>
            <Link to={`/product/${productInfo.others[0].slug}`} state={{info: others[0]}}>
              <Button type={"type-1"} text={"SEE PRODUCT"}/>
            </Link>
          </div>
          <div className="related-item">
            <img className="related-img" src={`/${productInfo.others[1].image.desktop}`} alt="" />
            <h2 className="related-title">{productInfo.others[1].name}</h2>
            <Link to={`/product/${productInfo.others[1].slug}`} state={{info: others[1]}}>
              <Button type={"type-1"} text={"SEE PRODUCT"} />
            </Link>
          </div>
          <div className="related-item">
            <img className="related-img" src={`/${productInfo.others[2].image.desktop}`} alt="" />
            <h2 className="related-title">{productInfo.others[2].name}</h2>
            <Link to={`/product/${productInfo.others[2].slug}`} state={{info: others[2]}}>
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