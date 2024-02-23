import "@/styles/globals.css";
import "@/styles/navbar.css";

import Layout from "./layoutProvider";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Artikelsidor />
      <News /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
