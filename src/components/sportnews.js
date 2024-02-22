//Julia

import React, { useEffect, useState } from "react";
import fetchNews from "@https://newsdata.io/API";

const SportsNews = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await fetchNews();
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sports News</h2>
      <ul>
        {sportsNews.map((news) => (
          <li key={news.id} className="mb-4">
            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p className="text-gray-600">{news.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsNews;
