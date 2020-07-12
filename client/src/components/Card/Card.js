import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({news: {name, category, country, description, authencity, url}}) => {
  const [totalAuthenticity, setAuthenticty] = useState(0);
  const calculateAuthenticity = () => {
    const {fake, notSure, authentic} = authencity;

    const fakeVotes = Math.round((fake.reduce((acc, val) => acc + val,0)) / fake.length || 0);
    const maybeVotes = Math.round(notSure.reduce((acc, val) => acc + val,0) / notSure.length || 0);
    const originalVotes = Math.round(authentic.reduce((acc, val) => acc + val,0) / authentic.length || 0);

    setAuthenticty(fakeVotes+maybeVotes+originalVotes);
  }

  useEffect(() => calculateAuthenticity());

  return (
    <div className="card-container">
      <h2>{name}</h2>
      <h4>Authenticity: {totalAuthenticity}%</h4> 
      <p>Category:{category}</p>
      <p>Country:{country}</p>
      <p>{ description }</p>
      <p><img src="./images/green.png" alt="Original" /> <img src="./images/yellow.png" alt="Neutral"/><img src="./images/red.png" alt="Fake"/></p>
      <a href={url} alt="Link" target="_blank" rel="noopener noreferrer">Read Full News here...</a>
    </div>
  );
};

export default Card;