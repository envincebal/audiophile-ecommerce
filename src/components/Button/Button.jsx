import React from 'react';

import "./Button.scss";

const Button = ({text, type}) => {
  let span;
  if(type === "type-4"){
    span =  <span className="arrow-link">{">"}</span>
  }
  return (
    <button className={`btn ${type}`}>
      {text} {span}
    </button>
  )
}

export default Button;