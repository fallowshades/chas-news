/* import { Html, Head, Main, NextScript } from "next/document";
import Artikelsidor from "../components/Artikelsidor";
import Hello from "../pages/api/Hello";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Artikelsidor />
        <Hello/>
        <NextScript />
      </body>
    </Html>
  );
}
 */
// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";
import Artikelsidor from "../components/Artikelsidor";
import News from "./api/News";
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
