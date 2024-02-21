import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

//NOTE: THIS IS THE START PAGE HOME! :)
export default function Home() {
  const [list, setList] = useState([]);

  //NOTE: THIS CAN BE USED IN EVERY PAGE, I ASKED THE TEACHER :)
  useEffect(() => {
    fetch("/api/copy/latestNews")
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);
  /* console.log(list); */

  return (
    <div
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <h1>Latest News</h1>
      <p>hej</p>
      <Button asChild className="mt-4">
        <Link href="/international_news">international news</Link>
      </Button>
      <div>
       
      </div>
    </div>
  );
}
