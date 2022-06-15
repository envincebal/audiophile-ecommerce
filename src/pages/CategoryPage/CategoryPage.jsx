import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import Footer from "../../components/Footer/Footer";
import {getCategories} from "../../api/APICalls";
import "./CategoryPage.scss";

const CategoryPage = ({category}) => {

  const [categories,
    setCategories] = useState([])

  useEffect(() => {
    getCategories(category, setCategories);
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
            category={item.category}
            name={item.name}
            img={item.image.desktop}
            desc={item.description}
            slug={item.slug} />
        }).reverse()
}
      </div>

      <CategoryCards/>
      <ConstantDetails/>
      <Footer />
    </div>
  )
}

export default CategoryPage