import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({news: {name, category, country, description, authencity, url}, userEmail}) => {
  const [totalAuthenticity, setAuthenticty] = useState(0);

  const calculateAuthenticity = () => {
    const {fake, notSure, authentic} = authencity;
    const totalVotes = fake.length + notSure.length + authentic.length;

    const authenticVotes = Math.round((authentic.length / totalVotes) * 100); 
    setAuthenticty(authenticVotes);
  }

  const handleVoteForUser = async (e) => {
    const { target: { alt }} = e;
    const voteInformation = {
      email: userEmail,
      authencityType: alt
    };
    const userVote = await fetch(`http://localhost:5000/news/updateVote/${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(voteInformation),
    });
    if(userVote) {
      const msg = await userVote.json();
      calculateAuthenticity();
      alert(msg.message);
    }
  };

  useEffect(() => calculateAuthenticity(), [JSON.stringify(authencity)])

  return (
    <div className="card-container">
      <h2>{name}</h2>
      <h4>Authenticity: {totalAuthenticity}%</h4> 
      <p>Category:{category}</p>
      <p>Country:{country}</p>
      <p>{ description }</p>
      <p>
        <img src="./images/green.png" alt="authentic" onClick={handleVoteForUser}/> 
        <img src="./images/yellow.png" alt="notSure" onClick={handleVoteForUser} />
        <img src="./images/red.png" alt="fake" onClick={handleVoteForUser} />
      </p>
      <a href={url} alt="Link" target="_blank" rel="noopener noreferrer">Read Full News here...</a>
    </div>
  );
};

export default Card;