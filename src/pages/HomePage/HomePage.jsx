import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";
import {Link} from "react-router-dom";
import "./HomePage.scss";
import { useEffect, useState } from "react";

const HomePage = ({products}) => {
  const [homeItem, setHomeItem] = useState([]);


  useEffect(() => {
  const productsArr = products || JSON.parse(localStorage.getItem("itemsArr"));
  const findItem = productsArr.find(item => item.slug === "xx99-mark-two-headphones");

  setHomeItem(findItem);
  },[products]);
  
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <header className="homepage-header">
          <Navbar />
          <div className="hero-div container">
            <p className="new-product-text">NEW PRODUCT</p>
            <h1 className="hero-title">XX99 MARK II HEADPHONES</h1>
            <p className="hero-text">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.</p>
            <Link to={`/product/xx99-mark-two-headphones`} state={{info: homeItem, products}}>
              <Button text={"SEE PRODUCT"} type={"type-1"}/>
            </Link>

          </div>
        </header>
      </div>
      <CategoryCards/>
      <FeaturedProducts/>
      <ConstantDetails/>
      <Footer/>
    </div>

  )
}

export default HomePage