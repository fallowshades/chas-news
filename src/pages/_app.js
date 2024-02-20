import '@/styles/globals.css'
import Layout from './layoutProvider'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  )
}
