import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamou - Fidelidade & Retenção</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
