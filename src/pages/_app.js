/* import "@/styles/globals.css";
import Artikelsidor from "../components/Artikelsidor";


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
 */
// pages/_app.js

import "@/styles/globals.css";
import Artikelsidor from "../components/Artikelsidor";
import News from "./api/News"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Artikelsidor />
      <News />
      <Component {...pageProps} />
    </>
  );
}
