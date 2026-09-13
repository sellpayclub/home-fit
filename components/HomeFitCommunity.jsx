import { X } from "lucide-react";
import { testimonials } from "./TestimonialsSection";

const obstacles = [
  "academia lotada",
  "mensalidade todo mês",
  "perder tempo no trânsito",
  "depender de aparelhos complicados",
];

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
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a6a180f3-1486-4b71-810a-b059f546a4ad.jpg", alt: "Resultado de aluna HomeFit com comparação de antes e depois" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/c5684ce6-9da4-478b-810d-8599801e8a6d.png", alt: "Resultado de aluna HomeFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/09c9656a-853e-4d62-b1b5-edd249f4e270.jpg", alt: "Resultado de aluna HomeFit" },
];

export default function HomeFitCommunity() {
  const slides = [...testimonials, ...testimonials];
  const resultSlides = [...results, ...results];

  return (
    <section className="section homefit-community">
      <div className="page-shell">
        <div className="section-heading section-heading--center">
          <h2>Junte-se a milhares de mulheres que escolheram treinar em casa</h2>
        </div>
      </div>
      <div
        className="homefit-community__slider homefit-results-carousel"
        aria-label="Resultados das alunas HomeFit"
      >
        <div className="homefit-community__track">
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

      <div className="homefit-community__slider" aria-label="Fotos das alunas treinando">
        <div className="homefit-community__track">
          {slides.map((photo, index) => (
            <img
              key={`${photo.src}-${index}`}
              src={photo.src}
              alt={index < testimonials.length ? photo.alt : ""}
              aria-hidden={index >= testimonials.length}
            />
          ))}
        </div>
      </div>
      <div className="narrow-content homefit-community__copy">
        <p>Treinar não precisa significar:</p>
        <ul>
          {obstacles.map((item) => (
            <li key={item}><X aria-hidden="true" size={19} strokeWidth={3} />{item}</li>
          ))}
        </ul>
        <p>Com o HomeFit, sua academia está <strong>na sua própria casa</strong>.</p>
      </div>
    </section>
  );
}