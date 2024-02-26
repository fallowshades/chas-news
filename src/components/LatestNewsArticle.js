import React from "react";

export default function LatestNewsArticle(props) {
  const title = props.articleObj.title;
  const description = props.articleObj.description;
  const articleImg = props.articleObj.image_url;
  const realizedDate = props.articleObj.pubDate;
  const country = props.articleObj.country[0];

  return (
    <div class="grid grid-cols m-3 p-4 justify-center gap-2 items-center">
      <div class="flex flex-row justify-between">
        <div class="grid justify-center items-center text-xl">
          Country: {country}
        </div>
        <div class="grid justify-center items-center text-xl">
          Publication Date: {realizedDate}
        </div>
      </div>
      <hr />
      <div class="grid p-2 justify-center items-center text-4xl font-medium">
        {title}
      </div>
      <div class="flex justify-center">
        <img
          class="rounded-xl justify-center items-center w-auto"
          src={articleImg}
        />
      </div>
      <div class="grid justify-center items-center text-2xl">{description}</div>
    </div>
  );
}
