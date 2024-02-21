import "@/styles/globals.css";
import Layout from "./layoutProvider";
import Navbar from "@/components/Navbar";
import ApiFetchin from "../pages/api/ApiFetchin"

/* OPTION: THE "NavBar" COMPONENT RENDERS IN ALL PAGES. */
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      
      {/* <Navbar /> */}
      <ApiFetchin />
      <Component {...pageProps} />;
    </Layout>
  );
}
