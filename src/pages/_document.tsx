import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "../components/Analytics";

export default function Document() {
  return (
    <Html lang="pt">
      <Head />
      <body>
        <Main />
        <Analytics />
        <NextScript />
      </body>
    </Html>
  );
}
