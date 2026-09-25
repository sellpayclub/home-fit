import Head from "next/head";
import DoresContent from "../components/DoresContent";

export default function Dores() {
  return (
    <>
      <Head>
        <title>HomeFit | Mobilidade e alívio para dores no corpo</title>
        <meta
          name="description"
          content="Exercícios guiados em casa para melhorar mobilidade, fortalecer o corpo e aliviar as dores."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DoresContent />
    </>
  );
}