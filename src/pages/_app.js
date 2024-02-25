import '@/styles/globals.css'
import '@/styles/navbar.css'

import Layout from './layoutProvider'
import Navbar from '@/components/Navbar'
import { wrapper } from '@/lib/store'

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* This component doesn't need consume Context */}
      <Layout>
        {/* <Artikelsidor />
      <News /> */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(App)
