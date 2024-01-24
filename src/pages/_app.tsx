import "@/styles/globals.css";
import Top from "@/components/top";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
    </>
  );
}
