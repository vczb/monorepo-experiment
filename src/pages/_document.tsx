import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "../components/Analytics";
import { BodyGTM } from "../components/TagManager";

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
