import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <title>Events App</title>
    </Head>
    <Component {...pageProps} />
  </Layout>
}
