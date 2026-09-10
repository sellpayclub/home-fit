import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18406188810"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18406188810');
        `}
      </Script>
      <Script
        src="https://checkout.sellpay.com.br/utm-link-bridge.js"
        strategy="afterInteractive"
      />
    </>
  );
}