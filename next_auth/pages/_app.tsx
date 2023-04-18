import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";



import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;