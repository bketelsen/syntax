import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {

  return (
    <>

      <Layout
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
