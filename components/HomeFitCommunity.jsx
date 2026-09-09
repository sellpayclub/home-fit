import { X } from "lucide-react";
import { testimonials } from "./TestimonialsSection";

const obstacles = [
  "academia lotada",
  "mensalidade todo mês",
  "perder tempo no trânsito",
  "depender de aparelhos complicados",
];

export default function HomeFitCommunity() {
  const slides = [...testimonials, ...testimonials];

  return (
    <section className="section homefit-community">
      <div className="page-shell">
        <div className="section-heading section-heading--center">
          <h2>Junte-se a milhares de mulheres que escolheram treinar em casa</h2>
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