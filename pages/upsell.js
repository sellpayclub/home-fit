import Head from "next/head";
import UpsellPage from "../components/UpsellPage";

export default function Upsell() {
  return (
    <>
      <Head>
        <title>Oferta exclusiva para alunos HomeFit</title>
        <meta
          name="description"
          content="Assista ao vídeo para finalizar sua compra."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UpsellPage />
    </>
  );
}