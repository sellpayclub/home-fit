import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const audience = [
  "não quer pagar academia todo mês",
  "prefere se exercitar em casa",
  "está começando agora",
  "ficou um tempo parada e quer voltar",
  "quer fortalecer o corpo inteiro",
  "gosta de Pilates ou Yoga",
  "quer treinos fáceis de acompanhar",
  "quer escolher entre vários tipos de exercícios",
  "quer treinar no seu próprio horário",
];

export default function HomeFitSupport() {
  return (
    <>
      <section className="section homefit-audience">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Para quem é o HomeFit?</h2>
            <p>O HomeFit é para você que:</p>
          </div>
          <ul>
            {audience.map((item) => (
              <li key={item}><Check aria-hidden="true" size={18} strokeWidth={3} />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section homefit-anywhere">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Sua academia vai estar sempre com você</h2>
            <h3>Celular • Tablet • Computador • TV</h3>
          </div>
          <div className="homefit-anywhere__steps">
            <p>Abra a plataforma.</p>
            <p>Escolha seu treino.</p>
            <p>Coloque o celular ou a TV na sua frente.</p>
            <p>E acompanhe cada exercício passo a passo.</p>
          </div>
          <div className="homefit-anywhere__promises">
            <p>Sem horário marcado.</p>
            <p>Sem precisar sair de casa.</p>
            <p>Sem mensalidade de academia.</p>
          </div>
        </div>
      </section>

      <section className="section homefit-start">
        <div className="narrow-content">
          <h2>Você pode começar hoje</h2>
          <p>Assim que seu pagamento for confirmado, você recebe acesso ao HomeFit.</p>
          <p>Entre na plataforma e escolha seu primeiro treino.</p>
          <h3>Acesso a partir de R$19,90</h3>
          <p><strong>Pagamento único.</strong></p>
          <CTAButton href="/homefit#homefit-planos">QUERO COMEÇAR AGORA</CTAButton>
        </div>
      </section>
    </>
  );
}