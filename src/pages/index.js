import LatestNewsArticle from "@/components/LatestNewsArticle";
import { useState, useEffect } from "react";

/* API_KEY = "";
fetch(
  `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&category=top&size=10`
); */

//NOTE: THIS IS THE START PAGE HOME! :)
export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("api/copy/latestNews")
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  return (
    <main class="justify-center items-center">
      <div>
        <div class="p-4 grid justify-center items-center text-5xl font-semibold">
          Latest News
        </div>
      </div>
      <div>
        <ul className="grid grid-cols justify-center items-center gap-3 bg-slate-700">
          {list.map((article) => (
            <li
              className="grid grid-cols justify-center items-center bg-slate-300 p-2 m-2 rounded-xl "
              key={article.id}
            >
              <LatestNewsArticle articleObj={article} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
