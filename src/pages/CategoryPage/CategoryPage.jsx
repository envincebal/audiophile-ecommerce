import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
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
      <div className="products-div container">
        {categories.map((item, index) => {
          return <CategoryProduct
            key={index}
            id={index}
            length={categories.length}
            name={item.name}
            img={item.image.desktop}
            desc={item.description}/>
        }).reverse()
}
      </div>

      <CategoryCards/>
      <ConstantDetails/>

    </div>
  )
}

export default CategoryPage