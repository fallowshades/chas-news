
import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function GameNews() {
  
  const [news, setNews] = useState([]);

  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=gaming&apiKey=cdf73ecfeaf54e23975d4ae91a6d1834&pageSize=5&language=en&sortBy=publishedAt&include=image`
        );
        const data = await response.json();
        
        setNews(
          data.articles.slice(0, 5).map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
            imageUrl: article.urlToImage, 
            isHovered: false, 
          }))
        );
      } catch (error) {
        
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  
  const handleMouseEnter = index => {
    setNews(prevNews => {
      const updatedNews = [...prevNews];
      updatedNews[index].isHovered = true;
      return updatedNews;
    });
  };

  
  const handleMouseLeave = index => {
    setNews(prevNews => {
      const updatedNews = [...prevNews];
      updatedNews[index].isHovered = false;
      return updatedNews;
    });
  };

  
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url("/beautiful.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.01)", 
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)", 
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "rgba(255, 255, 255, 0.1)", 
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        }}
      >
        <div style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", marginTop: "50px", color: "#000", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}>
          <u>Welcome to the GAMING NEWS section</u>
        </div>

        <h1 style={{ color: "#000" }}>News:</h1>
        {news.map((article, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              marginBottom: "20px",
              padding: "20px",
              transition: "transform 0.2s, background-color 0.2s", 
              transform: article.isHovered ? "scale(1.02)" : "scale(1)", 
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", 
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <article>
              <h2 style={{ marginTop: "0", marginBottom: "10px", color: "#000" }}>{article.title}</h2>
              <p style={{ marginTop: "0", marginBottom: "10px", color: "#333" }}>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    backgroundColor: article.isHovered ? "#007bff" : "#ddd", 
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    display: "inline-block",
                    transition: "background-color 0.2s", 
                  }}
                >
                  Read more
                </div>
              </a>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

// Här ska jag skriva en förklarande text till mig/oss och förtydliga vad jag gjort //