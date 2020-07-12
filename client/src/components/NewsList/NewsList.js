import React, { useState, useEffect } from "react";
import News from "../News/News";
import "./NewsList.css";

const NewsList = (props) => {
  const [news, setNews] = useState([]);
  const [email, setEmail] = useState('');

  const setUserInfo = () => {
    const { searchParams } = new URL(window.location.href);
    setEmail(searchParams.get("email"));
  };

  const fetchNews = async () => {
    const data = await fetch('http://localhost:5000/news/latestNews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const latestNews = await data.json();
    setNews(latestNews);
  };

  const handleVoteForUser = async (e, name) => {
    const { target: { alt }} = e;
    const voteInformation = {
      email,
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
      fetchNews();
      const msg = await userVote.json();
      alert(msg.message);
    }
  };

  useEffect(() => {
    fetchNews();
    setUserInfo();
  }, []);

  return (
    <div className="card-list">
      {news.map((cardnews, idx) => (
        <News
          key={idx}
          news={cardnews}
          updateVote={handleVoteForUser}
        />
      ))}
    </div>
  )
};

export default NewsList;
