import Head from "next/head";
import Script from "next/script";
import Nav from "../components/Nav";
import Home from "../components/Home";
import { Footer } from "../components/Footer";
import { HeadGTM } from "../components/TagManager";

export default function Index() {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/ec554abd23.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <Head>
        <title>Gamou - Tecnologia para conversão e retenção de clientes</title>
        <meta
          name="description"
          content="O sistema Gamou tem diversos recursos para que possa criar cupons de descontos, agilizar pedidos, inteligência artificial e muito mais para fazer seu negócio crescer."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <HeadGTM />
      </Head>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}
