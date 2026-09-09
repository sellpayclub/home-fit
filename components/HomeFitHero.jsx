import CTAButton from "./CTAButton";

const MOCKUP_URL = "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/53e9597f-5615-49a1-bad8-d04989172fdd.jpg";

export default function HomeFitHero() {
  return (
    <>
      <section className="homefit-hero">
        <div className="page-shell homefit-hero__layout">
          <div className="homefit-hero__copy">
            <img
              className="homefit-hero__logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <h1>Sua Academia Completa em Casa!</h1>
            <h2>Treinos para o corpo inteiro + Pilates + Yoga + Alongamento + Exercícios com Elásticos</h2>
            <div className="homefit-hero__mockup homefit-hero__mockup--mobile">
              <img src={MOCKUP_URL} alt="Plataforma de treinos HomeFit em dispositivos móveis" />
            </div>
            <p>
              Treine <strong>pernas, glúteos, abdômen, braços e o corpo inteiro</strong> sem precisar sair de casa.
            </p>
            <p>
              Aulas passo a passo para você acompanhar pelo celular, mesmo que esteja começando agora.
            </p>
            <CTAButton href="/homefit#homefit-planos">QUERO MEU ACESSO</CTAButton>
          </div>
          <div className="homefit-hero__mockup homefit-hero__mockup--desktop">
            <img src={MOCKUP_URL} alt="Plataforma de treinos HomeFit em dispositivos móveis" />
          </div>
        </div>
      </section>

      <section className="section homefit-presentation">
        <div className="narrow-shell">
          <div className="section-heading section-heading--center">
            <h2>Veja como funciona:</h2>
          </div>
          <div className="homefit-video">
            <iframe
              src="https://play.tynk.ai/p/327b263c-c3d5-4bdd-87e4-31728da8c5a8"
              title="Vídeo de apresentação HomeFit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="centered-cta">
            <CTAButton href="/homefit#homefit-planos">QUERO COMEÇAR AGORA</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}