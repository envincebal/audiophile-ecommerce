import React from 'react';
import CategoryLink from "../CategoryLink/CategoryLink";
import HeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

import "./CategoryCards.scss";

const CategoryCards = () => {
  return (
    <section className="category-cards container">
      <CategoryLink text={"HEADPHONES"} img={HeadphonesImg} />
      <CategoryLink text={"SPEAKERS"} img={SpeakerImg} />
      <CategoryLink text={"EARPHONES"} img={EarphonesImg} />
    </section>
  )
}

export default CategoryCards