import { Laptop } from "lucide-react";
import CTAButton from "./CTAButton";

export default function DevicesSection() {
  return (
    <section className="section devices-section">
      <div className="page-shell devices-layout">
        <div className="devices-visual">
          <img
            src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d99d936f-be7a-4183-b672-4a4b8a289127.jpg"
            alt="Kit de faixas elásticas Método ElasticFit"
          />
        </div>

        <div className="devices-copy">
          <div className="section-heading">
            <h2>Acesse de qualquer lugar</h2>
          </div>

          <p className="devices-copy__platforms">
            Celular, tablet, computador e TV
          </p>
          <p>Abra o treino, coloque sua faixa e acompanhe o movimento.</p>

          <div className="instant-access">
            <Laptop aria-hidden="true" size={25} strokeWidth={1.9} />
            <div>
              <h3>Acesso imediato por R$10</h3>
              <p>
                Você recebe seu acesso logo após a confirmação do pagamento.
              </p>
            </div>
          </div>

          <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
        </div>
      </div>
    </section>
  );
}