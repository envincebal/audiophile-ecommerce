import React from 'react';
import Button from "../Button/Button";
import "./CategoryProduct.scss";

const CategoryProduct = ({
  id,
  length,
  img,
  name,
  desc,
  path
}) => {

  return (
    <div className="category-product">
      <img className="category-img" src={`${img}`} alt={name}/>
      <div className="category-info">
        {id === length - 1
          ? <p className="new-product">NEW PRODUCT</p>
          : null}

        <h1 className="category-title">{name}</h1>
        <p className="category-desc">{desc}</p>
        <Button type={"type-1"} text={"SEE PRODUCT"}  />
      </div>
    </div>

  )

}

export default CategoryProduct