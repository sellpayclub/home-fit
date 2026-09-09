import Head from "next/head";
import HomeFitPage from "../components/HomeFitPage";

export default function HomeFit() {
  return (
    <>
      <Head>
        <title>HomeFit | Sua Academia Completa em Casa</title>
        <meta
          name="description"
          content="Treinos para o corpo inteiro, Pilates, Yoga, alongamento e exercícios com elásticos."
        />
      </Head>
      <HomeFitPage />
    </>
  );
}