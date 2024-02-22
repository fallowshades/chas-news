<<<<<<< HEAD
/* import "@/styles/globals.css";
import Artikelsidor from "../components/Artikelsidor";

=======
import "@/styles/globals.css";
import Layout from "./layoutProvider";
import Navbar from "@/components/Navbar";
import ApiFetchin from "../pages/api/ApiFetchin"
>>>>>>> 81100a22fdc60aeea2a0fda2498f6003596bc6a3

/* OPTION: THE "NavBar" COMPONENT RENDERS IN ALL PAGES. */
export default function App({ Component, pageProps }) {
<<<<<<< HEAD
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
=======
  return (
    <Layout>
      
      {/* <Navbar /> */}
      <ApiFetchin />
      <Component {...pageProps} />;
    </Layout>
>>>>>>> 81100a22fdc60aeea2a0fda2498f6003596bc6a3
  );
}
