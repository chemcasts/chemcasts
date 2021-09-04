import Head from "next/head";
import Layout from "../components/Layout";
import "../public/svg.css";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
        <meta name="twitter:site" content="@CHEMCASTS_" />
        <meta name="twitter:creator" content="@DKKadavla" />
        <meta property="og:site_name" content="CHEMCASTS" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
