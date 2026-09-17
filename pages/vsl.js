import Head from "next/head";
import VSLPage from "../components/VSLPage";

export default function VSL() {
  return (
    <>
      <Head>
        <title>HomeFit | Método de Treino Metabólico HIIT</title>
        <meta
          name="description"
          content="Veja como funciona o Método de Treino Metabólico HIIT HomeFit."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <VSLPage />
    </>
  );
}