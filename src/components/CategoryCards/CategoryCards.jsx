import React from 'react';
import CategoryLink from "../CategoryLink/CategoryLink";


import "./CategoryCards.scss";

const CategoryCards = () => {
  return (
    <section className="category-cards container">
      <CategoryLink text={"HEADPHONES"} img={"/assets/shared/desktop/image-category-thumbnail-headphones.png"} link={"/headphones"} />
      <CategoryLink text={"SPEAKERS"} img={"/assets/shared/desktop/image-category-thumbnail-speakers.png"} link={"/speakers"} />
      <CategoryLink text={"EARPHONES"} img={"/assets/shared/desktop/image-category-thumbnail-earphones.png"} link={"/earphones"} />
    </section>
  )
}

export default CategoryCards