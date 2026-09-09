import CTAButton from "./CTAButton";

const MOCKUP_URL =
  "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/728a4380-bc74-423a-a90c-7fdfae4850e1.jpg";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="page-shell hero__layout">
        <div className="hero__content">
          <img
            className="hero__logo"
            src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/081eacf1-e99c-44bd-bd37-0f2b72a99732.png"
            alt="Logo Método ElasticFit"
          />

          <h1>Sua Academia Completa em Casa com Elásticos!</h1>
          <h2>Pilates + Yoga + Fisioterapia + Musculação em um só lugar</h2>

          <div className="mockup-image mockup-image--mobile">
            <img
              src={MOCKUP_URL}
              alt="Mockup da plataforma Método ElasticFit em celulares"
            />
          </div>

          <p className="hero__description">
            Treine pernas, glúteos, abdômen, braços, fisioterapia e flexibilidade
            com aulas passo a passo — sem academia e usando apenas um kit de
            faixas elásticas
          </p>

          <CTAButton>QUERO MEU ACESSO</CTAButton>
        </div>

        <div className="mockup-image mockup-image--desktop">
          <img
            src={MOCKUP_URL}
            alt="Mockup da plataforma Método ElasticFit em celulares"
          />
        </div>
      </div>
    </section>
  );
}