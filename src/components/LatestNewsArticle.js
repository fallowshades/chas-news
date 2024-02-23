import React from "react";

export default function LatestNewsArticle(props) {
  const title = props.articleObj.title;
  const description = props.articleObj.description;
  const articleImg = props.articleObj.image_url;
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
