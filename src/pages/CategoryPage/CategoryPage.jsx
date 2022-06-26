import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import Footer from "../../components/Footer/Footer";

import "./CategoryPage.scss";
import { useSelector } from "react-redux";
const CategoryPage = ({category}) => {

  const [categories,
    setCategories] = useState([])
    const {products} = useSelector(store => store.cart);
  useEffect(() => {
    const productsArr = products || JSON.parse(localStorage.getItem("itemsArr"));
    const getCategories = productsArr.filter(item => item.category === category);
  setCategories(getCategories);
  }, [category,products]);

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