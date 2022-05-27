import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";

import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-navbar">
        <Navbar/>
      </div>

      <CategoryCards/>

      <ConstantDetails/>

    </div>
  )
}

export default ProductPage