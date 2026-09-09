import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://checkout.sellpay.com.br/utm-link-bridge.js"
        strategy="afterInteractive"
      />
    </>
  );
}