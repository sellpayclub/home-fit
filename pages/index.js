import Head from "next/head";
import SalesPage from "../components/SalesPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sua Academia Completa em Casa com Elásticos!</title>
        <meta
          name="description"
          content="Pilates + Yoga + Fisioterapia + Musculação em um só lugar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SalesPage />
    </>
  );
}