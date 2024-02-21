//https://newsdata.io/ article_id
import React from "react";
import { useEffect, useState } from "react";



export default function getNews() {
  const [news, setNews] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch(
        "https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=trump ",
      );
        const data = await res.json();
      
      console.log(data);
      setNews(data);
      }
      fetchNews()
  }, []);

  return (
      <>
          <div className=" w-80 h-80">
              
     {/*  {news.map((list) => (
        <li key={list.article_id}>
        
          {list.article_id}  <p>{list.title}</p>  {list.link}
        </li>
      ))} */}
              </div>
    </>
    );
    
}
