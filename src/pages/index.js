import LatestNewsArticle from "@/components/LatestNewsArticle";
import { useState, useEffect } from "react";

//NOTE: THIS IS THE START PAGE HOME! :)
export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/api/copy/latestNews")
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  /* console.log(list); */
  return (
    <main class="flex flex-col items-center">
      <div>
        <div class="block text-4xl">Latest News</div>
      </div>
      <div>
        <ul>
          {list.map((article) => (
            <li key={article.id}>
              <LatestNewsArticle articleObj={article} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
