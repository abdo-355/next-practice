import type { AppProps } from "next/app"
import Head from "next/head"

import Layout from "@/components/Layout/Layout"
import Notification from "@/components/UI/Notification"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <title>Events App</title>
    </Head>
    <Component {...pageProps} />
    <Notification title="test" message="test message" status="success" />
  </Layout>
}
