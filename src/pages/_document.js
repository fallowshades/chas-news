<<<<<<< HEAD
/* import { Html, Head, Main, NextScript } from "next/document";
import Artikelsidor from "../components/Artikelsidor";
import Hello from "../pages/api/Hello";
=======
import apiFetchin from "./api/ApiFetchin";
import { Html, Head, Main, NextScript } from "next/document";

>>>>>>> 81100a22fdc60aeea2a0fda2498f6003596bc6a3
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
<<<<<<< HEAD
        <Main />
        <Artikelsidor />
        <Hello/>
=======
        
        <Main />
        <apiFetchin />
>>>>>>> 81100a22fdc60aeea2a0fda2498f6003596bc6a3
        <NextScript />
      </body>
    </Html>
  );
}
 */
// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";
import Artikelsidor from "../components/Artikelsidor";
import News from "./api/News"
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
              {/* <News /> */}
          <Artikelsidor />
          <NextScript />
        </body>
      </Html>
    );
  }
}
