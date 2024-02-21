import "@/styles/globals.css";
import Layout from "./layoutProvider";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />;
    </Layout>
  );
}
/* NOTE: THE "NAVIGATION BAR" IS USING THE HEADER OF ALL PAGES. TRY DO NOT USE HEADER TAG IN THE OTHER PAGES.*/
