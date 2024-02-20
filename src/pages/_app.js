import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header class="bg-blue-400">
        <h1>Navigation-Bar-Here</h1>
      </header>
      <Component {...pageProps} />
    </>
  );
}
