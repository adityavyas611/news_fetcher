import React from "react";
import "./News.css";

const News = ({ news: { name, category, country, description, url, totalAuthenticity }, updateVote }) => {
  return (
    <div className="news-container">
      <h2>{name}</h2>
      <h4>Authenticity: {totalAuthenticity}%</h4> 
      <p>Category:{category}</p>
      <p>Country:{country}</p>
      <p>{description}</p>
      <p>
        <img src="./images/green.png" alt="authentic" onClick={(e) => updateVote(e, name)}/> 
        <img src="./images/yellow.png" alt="notSure" onClick={(e) => updateVote(e, name)} />
        <img src="./images/red.png" alt="fake" onClick={(e) => updateVote(e, name)} />
      </p>
      <a href={url} alt="Link" target="_blank" rel="noopener noreferrer">Read Full News here...</a>
    </div>
  );
};

export default News;