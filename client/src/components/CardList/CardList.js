import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = () => {
    const [news, setNews] = useState([]);
    const fetchNews = async () => {
        const data = await fetch('http://localhost:5000/news/latestNews', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const latestNews = await data.json();
          setNews((prev) => [...prev,...latestNews]);
    }
    
    useEffect(() => {
        fetchNews();
    },[]);

  return (
    <div className="card-list">
      {news.map(cardnews => (
        <Card key={cardnews.id} news={cardnews}/>
      ))};
    </div>
)};

export default CardList;