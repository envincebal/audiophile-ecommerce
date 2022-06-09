import React from 'react';

import "./Button.scss";

const Button = ({text, type, onClick}) => {
  let span;
  if(type === "type-4"){
    span =  <span className="arrow-link">{">"}</span>
  }
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text} {span}
    </button>
  )
}

export default Button;