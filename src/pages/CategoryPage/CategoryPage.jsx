import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";

import "./CategoryPage.scss";

const CategoryPage = () => {
  return (
    <div className="category-page">
      <div className="category-hero">
        <Navbar />
        <h1 className="category-title">HEADPHONES</h1>
      </div>
      
      <CategoryCards/>
      <ConstantDetails />
  
    </div>
  )
}

export default CategoryPage