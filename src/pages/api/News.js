// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//newsdata.io/api/1/news?apikey=pub_386614f80e562437654e8b9dc81c2015cc286&q=news

/* const url = ("https://newsdata.io/api/1/news?apikey=pub_386614f80e562437654e8b9dc81c2015cc286&q=news")

async function getNews() {
  const res = await fetch("url")
  const data = await res.url()
  console.log(data);
}
*/ /* import { useState, useEffect } from "react";

export default function Handler() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const getNews = async () => {
        try {
          const res = await fetch(
            "https://newsdata.io/api/1/news?apikey=pub_386614f80e562437654e8b9dc81c2015cc286&q=news"
          );
          if (!res.ok) {
            throw new Error("Failed to fetch news");
          }
          const data = await res.json();
          setNews(data || []);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };
      getNews();
    }, ); // Fetch news every 1000 milliseconds

    // Clean up the interval when the component unmounts or when the dependency array changes
    return () => clearInterval(intervalId);
  }, []); // empty dependency array means this effect runs only once after the component mounts

  return (
    <>
      <h3>Latest News</h3>
      <ul className="w-14 h-14 flex flex-row">
        {news.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
} */
import { useState, useEffect } from "react";

export default function Handler() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_386614f80e562437654e8b9dc81c2015cc286",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching news:", error);
      }
    };
    getNews();
  }, []);

  return (
    <>
      {Array.isArray(news) ? (
        <ul>
          {news.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No news available</p>
      )}
    </>
  );
}
