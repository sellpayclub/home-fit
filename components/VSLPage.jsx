import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import TrackingBridge from "./TrackingBridge";

const DELAY_MS = 4 * 60 * 1000;
const VIDEO_URL = "https://play.tynk.ai/p/62bc8700-bc7e-402b-86e8-ec5be8c2c20e";

const results = [
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/097bebb5-8767-4fdd-b329-478465a05091.jpg", alt: "Resultado de aluna HomeFit com comparação de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/af488165-d16c-4b75-a6be-a34f8dd2fb2e.jpg", alt: "Resultado de aluna HomeFit com comparação de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d4f8947b-6666-4de4-aa9c-1f67a7c1c261.jpg", alt: "Resultado de aluna HomeFit com comparação de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/0ff7220f-4423-43f0-b87a-24762a91bb63.jpg", alt: "Resultado de aluna HomeFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1c2dc9cd-4396-4d26-8229-07ed857e1073.jpg", alt: "Resultado de aluna HomeFit com comparação de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/256adba1-10c1-4753-8122-6182ee763de6.jpg", alt: "Resultado de aluna HomeFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7e359f3a-2901-4850-be1a-5b341d28d3b5.jpg", alt: "Resultado de aluna HomeFit com comparação lateral de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/acdb37e5-3c45-4f1a-a941-fad46128f0c6.jpg", alt: "Resultado de aluna HomeFit com transformação corporal" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/273afd66-2be3-4727-bb11-22497d3e6439.jpg", alt: "Resultado de aluna HomeFit no desafio de 30 dias" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a38aad9f-d3e5-4744-857b-793bbb64b4b2.jpg", alt: "Resultado de aluna HomeFit com antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d03065bb-64e4-4382-af6c-793c3a5bcb69.jpg", alt: "Resultado de aluna HomeFit com transformação de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/6ea1bb4b-221f-406e-ad8e-1df570feb1b3.jpg", alt: "Resultado de aluna HomeFit com mudança corporal" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b7ad15c7-c63a-4ca1-92b1-051ec744dcb0.jpg", alt: "Resultado de aluna HomeFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b944f3d3-f938-4bfa-8e35-09c63d915ee5.jpg", alt: "Resultado de aluna HomeFit após dois meses" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a6a180f3-1486-4b71-810d-8599801e8a6d.jpg", alt: "Resultado de aluna HomeFit com comparação de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/c5684ce6-9da4-478b-810d-8599801e8a6d.png", alt: "Resultado de aluna HomeFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/09c9656a-853e-4d62-b1b5-edd249f4e270.jpg", alt: "Resultado de aluna HomeFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e99c3890-bc93-4125-b801-3d9e7a3f4b1b.jpg", alt: "Resultado de aluna HomeFit com comparação de antes e depois" },
];

export default function VSLPage() {
  const [isOfferVisible, setIsOfferVisible] = useState(false);
  const resultSlides = [...results, ...results];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOfferVisible(true);
    }, DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const revealOfferImmediately = (event) => {
    if (event.detail >= 3) {
      setIsOfferVisible(true);
    }
  };

  return (
    <main className="vsl-page">
      <TrackingBridge />
      <section className="vsl-page__content">
        <div className="quiz-shell">
          <img
            className="quiz-logo"
            src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
            alt="Logo Método HomeFit"
          />

          <h1 className="vsl-page__headline" onClick={revealOfferImmediately}>
            Veja como funciona o Método de Treino Metabólico HIIT que{" "}
            <strong>Queima MAIS gordura e calorias em 5 minutos em casa</strong>{" "}
            do que 1 hora de academia:
          </h1>

          <div className="vsl-page__video">
            <iframe
              src={VIDEO_URL}
              title="Método de Treino Metabólico HIIT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <section className="hiit-explainer">
            <h2>Veja por que o método HIIT HomeFit funciona:</h2>
            <img
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e6afc772-8d9b-4162-b983-e3da0fbd1fbf.jpg"
              alt="Gráfico do método HIIT HomeFit mostrando que a queima de gordura continua após o treino"
            />
          </section>

          {isOfferVisible && (
            <>
              <div className="vsl-page__offer">
                <h2>Comece hoje a treinar em casa com o HomeFit</h2>
                <p>Escolha seu plano e comece hoje.</p>
                <a className="quiz-primary-button" href="/homefit#homefit-planos">
                  <span>QUERO MEU ACESSO!</span>
                  <ChevronRight aria-hidden="true" size={21} strokeWidth={3} />
                </a>
              </div>

              <div
                className="vsl-page__results-carousel"
                aria-label="Resultados das alunas HomeFit"
              >
                <div className="vsl-page__results-track">
                  {resultSlides.map((result, index) => (
                    <img
                      key={`${result.src}-${index}`}
                      src={result.src}
                      alt={index < results.length ? result.alt : ""}
                      aria-hidden={index >= results.length}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}