import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import "./CategoryLink.scss";

const CategoryLink = ({img, text, link}) => {
  return (
    <div className="category-link">
      <img className="category-img" src={img} alt={text}/>
      <h6 className="category-text">{text}</h6>
      <Link to={`${link}`}>
      <Button text={"SHOP"} type={"type-4"}/>
      </Link>
      {console.log(link)}
    </div>
  )
}

export default CategoryLink;