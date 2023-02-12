import Head from "next/head";
import Script from "next/script";
import Nav from "../components/Nav";
import Home from "../components/Home";
import { Footer } from "../components/Footer";
import { HeadGTM } from "../components/Google";

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
          content="Torne suas vendas mais simples e rápidas. Fidelize através de sistema de gamificação. Analise os dados em tempo real com auxilio de inteligência artificial"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_BASE_URL}
          key="canonical"
        />
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
