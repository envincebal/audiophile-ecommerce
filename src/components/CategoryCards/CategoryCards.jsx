import React from 'react';
import HeadphonesLink from "../HeadphonesLink/HeadphonesLink";
import SpeakersLink from "../SpeakersLink/SpeakersLink";
import EarphonesLink from "../EarphonesLink/EarphonesLink";

import "./CategoryCards.scss";

const CategoryCards = () => {
  return (
    <section className="category-cards container">
      <HeadphonesLink/>
      <SpeakersLink/>
      <EarphonesLink/>
    </section>
  )
}

export default CategoryCards