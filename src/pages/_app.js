import "@/styles/globals.css";
import "@/styles/navbar.css";

import Layout from "./layoutProvider";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* This component doesn't need consume Context */}
      <Layout>
        {/* <Artikelsidor />
      <News /> */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
