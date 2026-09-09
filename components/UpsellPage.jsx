import { useEffect, useState } from "react";
import { getCheckoutUrl } from "./CTAButton";

const VIDEO_URL = "https://play.tynk.ai/p/035750d1-2fc6-4f78-a389-9a48ab0a59f9";
const ELASTIC_CHECKOUT_URL = "https://checkout.sellpay.com.br/c/kg9e";
const PLATFORM_ACCESS_URL = "https://bumbum-pessego.vercel.app/";
const ELASTIC_BANDS_IMAGE = "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/eef4d495-18bd-4f3a-9b1d-2d587846ca9d.jpg";
const DELAY_SECONDS = 30;

export default function UpsellPage() {
  const [secondsRemaining, setSecondsRemaining] = useState(DELAY_SECONDS);

  useEffect(() => {
    if (secondsRemaining === 0) return undefined;

    const timer = window.setTimeout(() => {
      setSecondsRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [secondsRemaining]);

  const isOfferAvailable = secondsRemaining === 0;

  const handleExternalLink = (event) => {
    event.currentTarget.href = getCheckoutUrl(event.currentTarget.href);
  };

  return (
    <main className="upsell-page">
      <section className="upsell">
        <div className="upsell__alert">
          Atenção: assista o vídeo abaixo para finalizar a compra
        </div>

        <div className="upsell__content">
          <div className="upsell__heading">
            <h1>Antes de acessar a plataforma, assista a este vídeo.</h1>
          </div>

          <div className="upsell__video">
            <iframe
              src={VIDEO_URL}
              title="Vídeo da oferta exclusiva HomeFit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {isOfferAvailable && (
            <div className="upsell__offer">
              <img
                className="upsell__product-image"
                src={ELASTIC_BANDS_IMAGE}
                alt="Kit HomeFit com cinco bandas de resistência em diferentes níveis"
              />
              <p className="upsell__exclusive">desconto exclusivo para alunos HomeFit.</p>
              <p className="upsell__price">
                <span>R$ 199,90</span> por Apenas: <strong>R$ 89,90 HOJE</strong>
              </p>
              <div className="upsell__actions">
                <a
                  className="upsell__buy-button"
                  href={ELASTIC_CHECKOUT_URL}
                  onClick={handleExternalLink}
                >
                  Quero comprar o Elástico
                </a>
                <a
                  className="upsell__decline-button"
                  href={PLATFORM_ACCESS_URL}
                  onClick={handleExternalLink}
                >
                  NÃO, QUERO ACESSAR MINHA COMPRA
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}