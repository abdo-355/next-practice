import type { AppProps } from "next/app"
import Head from "next/head"

import Layout from "@/components/Layout/Layout"
import { NotificationProvider } from "@/context/notification"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return <NotificationProvider>
    <Layout>
      <Head>
        <title>Events App</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  </NotificationProvider>
}
