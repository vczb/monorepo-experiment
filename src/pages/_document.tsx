import { Html, Head, Main, NextScript } from "next/document";
import { Analytics, BodyGTM } from "../components/Google";

export default function Document() {
  return (
    <Html lang="pt">
      <Head />
      <body>
        <Main />
        <Analytics />
        <BodyGTM />
        <NextScript />
      </body>
    </Html>
  );
}
