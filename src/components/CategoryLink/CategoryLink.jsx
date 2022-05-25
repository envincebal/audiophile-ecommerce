import React from 'react'
import Button from "../Button/Button";

import "./CategoryLink.scss";

const CategoryLink = ({img, text, link}) => {
  return (
    <div className="category-link">
      <img className="category-img" src={img} alt={text}/>
      <h6 className="category-text">{text}</h6>
      <Button text={"SHOP"} link={link} type={"type-4"}/>
    </div>
  )
}

export default CategoryLink;