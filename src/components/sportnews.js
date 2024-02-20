//Julis sportsida

// src/components/SportsNews.js
import React, { useEffect, useState } from "react";
import fetchNews from "";

const SportsNews = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await fetchNews(); // Använd din fetchNews-funktion här
        // Filtera eller manipulera nyheterna för sportsektionen om det behövs
        const sportsNewsData = newsData.filter(
          (item) => item.category === "sport"
        );
        setSportsNews(sportsNewsData);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Sports News</h2>
      <ul>
        {sportsNews.map((news) => (
          <li key={news.id}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            {/* visa annan information som man vill ha */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsNews;
