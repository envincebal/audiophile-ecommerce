import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import ConstantDetails from "../../components/ConstantDetails/ConstantDetails";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <header className="homepage-header">
          <Navbar/>
          <div className="hero-div container">
            <p className="new-product-text">NEW PRODUCT</p>
            <h1 className="hero-title">XX99 MARK II HEADPHONES</h1>
            <p className="hero-text">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.</p>
            <Button text={"SEE PRODUCT"} type={"type-1"}/>
          </div>

        </header>
      </div>
      <CategoryCards/>
      <FeaturedProducts/>
      <ConstantDetails/>

    </div>

  )
}

export default HomePage