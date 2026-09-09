import CTAButton from "./CTAButton";

export default function VideoSection() {
  return (
    <section className="section video-section">
      <div className="page-shell narrow-shell">
        <div className="section-heading section-heading--center">
          <h2>Veja como funciona:</h2>
        </div>

        <div className="video-frame">
          <iframe
            className="video-frame__embed"
            src="https://play.tynk.ai/p/4181390b-dfe8-43a3-9541-8baf5aeb0a91"
            title="Vídeo de apresentação do Método ElasticFit"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="centered-cta">
          <CTAButton>QUERO MEU ACESSO</CTAButton>
        </div>
      </div>
    </section>
  );
}