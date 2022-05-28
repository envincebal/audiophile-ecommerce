import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";
import {getItems} from "../../api/APICalls";
import "./CategoryPage.scss";

const CategoryPage = ({category}) => {

  const [categories,
    setCategories] = useState([])

  useEffect(() => {
    getItems(category, setCategories);
  }, [category]);
  return (
    <div className="category-page">
      <div className="category-hero">
        <Navbar/>
        <h1 className="category-title">{category.toUpperCase()}</h1>
      </div>
      {categories.map((item, index) => {
        return <p key={index}>{item.name}</p>
      }).reverse()
}

      <CategoryCards/>
      <ConstantDetails/>

    </div>
  )
}

export default CategoryPage