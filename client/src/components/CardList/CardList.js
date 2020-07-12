import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = (props) => {
  const [news, setNews] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const setUserInfo = () => {
    const parsedUrl = new URL(window.location.href);
    setName(parsedUrl.searchParams.get("name"));
    setEmail(parsedUrl.searchParams.get("email"));
  }

  const fetchNews = async () => {
    const data = await fetch('http://localhost:5000/news/latestNews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const latestNews = await data.json();
    setNews((prev) => [...prev, ...latestNews]);
  }

  useEffect(() => {
    fetchNews();
    setUserInfo();
  }, []);

  return (
    <div className="card-list">
      {news.map((cardnews, idx) => (
        <Card key={idx} news={cardnews} userEmail={email}/>
      ))}
    </div>
  )
};

export default CardList;
