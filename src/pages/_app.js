import "@/styles/globals.css";
import Layout from "./layoutProvider";
import Navbar from "@/components/Navbar";

/* NOTE: THE "NabBar" COMPONENT RENDERS IN ALL PAGES. */
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />;
    </Layout>
  );
}
