import Head from "next/head";
import QuizPage from "../components/QuizPage";

export default function Quiz() {
  return (
    <>
      <Head>
        <title>HomeFit | Monte seu plano de exercícios em casa</title>
        <meta
          name="description"
          content="Responda algumas perguntas e monte seu plano de exercícios em casa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QuizPage />
    </>
  );
}