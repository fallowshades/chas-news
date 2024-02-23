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
    <div>
      <h1>Latest News</h1>
    </div>
  );
}
