import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { getItem } from "../../api/APICalls";
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
const [info,setInfo] = useState(null);




useEffect(() => {

 getItem(slug, setInfo);

}, [slug]);


  return (
    <div className="category-product">
      <img className="category-img" src={`${img}`} alt={name}/>
      <div className="category-info">
        {id === length - 1
          ? <p className="new-product">NEW PRODUCT</p>
          : null}

        <h1 className="category-title">{name.toUpperCase()}</h1>
        <p className="category-desc">{desc}</p>
        <Link to={`/product/${slug}`} state={{info}}>
          <Button type={"type-1"} text={"SEE PRODUCT"}/>
        </Link>

      </div>
    </div>

  )

}

export default CategoryProduct