import "@/styles/globals.css";
import "@/styles/fonts.css"
import "@/styles/media.css"
import "@/styles/main.css"

import type { AppProps } from "next/app";
import { CartProvider } from '../components/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />;
    </CartProvider>
  );
}
