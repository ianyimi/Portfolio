import { AppProps } from "next/app";
import Head from "next/head";
import "../worlds/utils/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Isaiah Anyimi</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
