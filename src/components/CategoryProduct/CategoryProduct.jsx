import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import "./CategoryProduct.scss";

const CategoryProduct = ({
  id,
  length,
  img,
  name,
  desc,
  slug
}) => {
const [info,setInfo] = useState([]);
const {products} = useSelector(store => store.cart);

useEffect(() => {
  const productsArr = products || JSON.parse(localStorage.getItem("itemsArr"));
  const findProduct = productsArr.find(item => item.id === id);

  setInfo(findProduct);

}, []);

  return (
    <div className="category-product">
      <picture>
        <source media="(max-width: 700px)" srcSet={`/assets/product-${slug}/mobile/image-category-page-preview.jpg`}></source>
        <source media="(max-width: 1000px)" srcSet={`/assets/product-${slug}/tablet/image-category-page-preview.jpg`}></source>
        <img
          src={`/assets/product-${slug}/desktop/image-category-page-preview.jpg`}
          className="category-img" 
          alt="Product item"/>
      </picture>
      <div className="category-info">
        {id === length - 1
          ? <p className="new-product">NEW PRODUCT</p>
          : null}
        <h1 className="category-title">{name.toUpperCase()}</h1>
        <p className="category-desc">{desc}</p>
        <Link to={`/product/${slug}`} state={{info, products}}>
          <Button type={"type-1"} text={"SEE PRODUCT"}/>
        </Link>
      </div>
    </div>

  )

}

export default CategoryProduct