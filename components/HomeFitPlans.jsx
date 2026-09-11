import { useState } from "react";
import { Check, X } from "lucide-react";
import CTAButton, { getCheckoutUrl } from "./CTAButton";

const essentialItems = [
  "exercícios em casa",
  "treinos básicos",
  "acesso pelo celular",
];


const completeItems = [
  "Exercícios em casa",
  "Pilates em casa",
  "Yoga em casa",
  "Exercício com elastico",
  "treino pernas e glúteos",
  "treino para perder barriga",
  "exercícios braços e costas",
  "alongamento/mobilidade e fisioterapia",
  "Grupo de alunas",
  "Acesso completo à plataforma",
  "Acesso vitalício",
];

function PlanList({ items }) {
  return (
    <ul className="homefit-plan__list">
      {items.map((item) => {
        const isLifetime = item === "Acesso vitalício";

        return (
          <li className={isLifetime ? "homefit-plan__lifetime" : ""} key={item}>
            <Check aria-hidden="true" size={17} strokeWidth={3} />
            {isLifetime ? <strong>{item}</strong> : item}
          </li>
        );
      })}
    </ul>
  );
}


export default function HomeFitPlans() {
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);

  return (
    <section className="section homefit-plans" id="homefit-planos">
      <div className="page-shell">
        <div className="section-heading section-heading--center">
          <h2>Escolha seu acesso</h2>
        </div>
        <div className="homefit-plans__grid">
          <article className="homefit-plan">
            <h2>PLANO BÁSICO</h2>
            <h3>Para quem quer começar a treinar em casa</h3>
            <PlanList items={essentialItems} />
            <p className="homefit-plan__old">De R$49,90</p>
            <p className="homefit-plan__price">
              <span className="homefit-plan__installment">
                <span>10x</span>
                <strong>R$ 9,90</strong>
                <span>no cartão de crédito</span>
              </span>
              <small>ou <b>R$ 19,90</b> avista no PIX</small>
            </p>
            <p className="homefit-plan__note"><strong>Pagamento único. Acesso imediato.</strong></p>
            <CTAButton fullWidth onClick={() => setIsDiscountOpen(true)}>QUERO O PLANO BÁSICO</CTAButton>
          </article>
          <article className="homefit-plan homefit-plan--complete">
            <p className="homefit-plan__badge">MAIS ESCOLHIDO</p>
            <h2>PLANO COMPLETO</h2>
            <h3>Sua academia completa em casa</h3>
            <PlanList items={completeItems} />
            <p className="homefit-plan__old">De R$89,90</p>
            <p className="homefit-plan__price">
              <span className="homefit-plan__installment">
                <span>10x</span>
                <strong>R$ 4,90</strong>
                <span>no cartão de crédito</span>
              </span>
              <small>ou <b>R$ 49,90</b> avista no PIX</small>
            </p>
            <p className="homefit-plan__note"><strong>Pagamento único. Acesso imediato.</strong></p>
            <CTAButton fullWidth href="https://checkout.sellpay.com.br/c/i1vn">QUERO O PLANO COMPLETO</CTAButton>
          </article>
        </div>
      </div>

      {isDiscountOpen && (
        <div
          className="discount-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="homefit-discount-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsDiscountOpen(false);
          }}
        >
          <div className="discount-modal__content">
            <button
              type="button"
              className="discount-modal__close"
              onClick={() => setIsDiscountOpen(false)}
              aria-label="Fechar popup de desconto"
            >
              <X aria-hidden="true" size={22} strokeWidth={2.5} />
            </button>
            <p className="discount-modal__eyebrow">OFERTA ESPECIAL</p>
            <h2 id="homefit-discount-modal-title">
              VOCÊ GANHOU 40% DESCONTO NO PLANO COMPLETO
            </h2>
            <p className="discount-modal__price">
              por apenas <strong>R$ 29,90!</strong>
            </p>
            <CTAButton
              fullWidth
              href="https://checkout.sellpay.com.br/c/jdmu"
            >
              QUERO COMPRAR COM DESCONTO
            </CTAButton>
            <a
              className="discount-modal__basic-button"
              href="https://checkout.sellpay.com.br/c/rtnq"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                event.currentTarget.href = getCheckoutUrl(event.currentTarget.href);
              }}
            >
              QUERO SÓ O BASICO.
            </a>
          </div>
        </div>
      )}
    </section>
  );
}