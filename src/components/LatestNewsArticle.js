import React from "react";

export default function LatestNewsArticle(props) {
  const title = props.articleObj.title;
  const description = props.articleObj.description;
  const articleImg = props.articleObj.image_url;
  const realizedDate = props.articleObj.pubDate;
  return (
    <div class="grid grid-cols m-3 p-4 justify-center gap-2 items-center">
      <div class="grid justify-center items-center text-xl">{realizedDate}</div>
      <div class="grid justify-center items-center  text-2xl">{title}</div>
      <img className="rounded-xl justify-center items-center w-full " src={articleImg} />
      <div class="grid justify-center items-center  text-2xl">{description}</div>
    </div>
  );
}
