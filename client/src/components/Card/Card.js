import React from "react";
import "./Card.css";

const Card = ({news: {name, category, country, description, authenticity, url}}) => {
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <p>Category:{category}</p>
      <p>Country:{country}</p>
      <p>{ description }</p>
      <p><img src="./images/green.png" alt="Original" /> <img src="./images/yellow.png" alt="Neutral"/><img src="./images/red.png" alt="Fake"/></p>
      <a href={url} alt="Link" target="_blank">Read Full News here...</a>
    </div>
  );
};

export default Card;