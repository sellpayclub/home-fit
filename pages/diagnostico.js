import Head from "next/head";
import DiagnosisPage from "../components/DiagnosisPage";

export default function Diagnostico() {
  return (
    <>
      <Head>
        <title>HomeFit | Seu perfil está pronto</title>
        <meta
          name="description"
          content="Veja sua recomendação personalizada de exercícios HomeFit."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DiagnosisPage />
    </>
  );
}