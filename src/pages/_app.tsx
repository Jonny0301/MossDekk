import "@/styles/globals.css";
import "@/styles/fonts.css"
import "@/styles/media.css"
import "@/styles/main.css"

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
