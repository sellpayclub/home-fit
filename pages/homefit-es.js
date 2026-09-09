import Head from "next/head";
import HomeFitSpanishPage from "../components/HomeFitSpanishPage";

export default function HomeFitSpanish() {
  return (
    <>
      <Head>
        <title>HomeFit | Tu gimnasio completo en casa</title>
        <meta
          name="description"
          content="Entrenamientos para todo el cuerpo, Pilates, Yoga, estiramiento y ejercicios con bandas elásticas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeFitSpanishPage />
    </>
  );
}