import React from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import "./CategoryProduct.scss";

const CategoryProduct = ({
  id,
  length,
  category,
  img,
  name,
  desc,
  slug
}) => {

  return (
    <div className="category-product">
      <img className="category-img" src={`${img}`} alt={name}/>
      <div className="category-info">
        {id === length - 1
          ? <p className="new-product">NEW PRODUCT</p>
          : null}

        <h1 className="category-title">{name.toUpperCase()}</h1>
        <p className="category-desc">{desc}</p>
        <Link to={`/${category}/${slug}`}>
          <Button type={"type-1"} text={"SEE PRODUCT"}/>
        </Link>

      </div>
    </div>

  )

}

export default CategoryProduct