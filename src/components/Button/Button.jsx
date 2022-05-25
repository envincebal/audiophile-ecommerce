import React from 'react';
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({text, type, link}) => {
  let span;
  if(type === "type-4"){
    span =  <span className="arrow-link">{">"}</span>
  }
  return (
    <button className={`btn ${type}`}>
      <Link to={`/${link}`}>
      {text} {span}
      </Link>
    </button>
  )
}

export default Button;