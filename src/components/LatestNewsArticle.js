import React from "react";

export default function LatestNewsArticle(props) {
  const title = props.articleObj.title;
  const description = props.articleObj.description;
  const articleImg = props.articleObj.image_url;
  const realizedDate = props.articleObj.pubDate;
  return (
    <div class="flex flex-col py-4 border-black items-center">
      <div class="block text-xl">{realizedDate}</div>
      <div class="block text-2xl">{title}</div>
      <img src={articleImg} />
      <div class="block text-2xl">{description}</div>
    </div>
  );
}
