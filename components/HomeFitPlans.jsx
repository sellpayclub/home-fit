import { useState } from "react";
import { Check, X } from "lucide-react";
import CTAButton, { getCheckoutUrl } from "./CTAButton";

const essentialItems = [
  "Treinos em casa sem equipamentos",
  "Pernas e glúteos",
  "Abdômen",
  "Braços e costas",
  "Corpo inteiro",
  "Mobilidade e alongamento",
  "Acesso pelo celular",
];

const basicUnavailableItems = [
  "Pilates em casa",
  "Yoga",
  "Módulo completo ElasticFit",
  "Treinos com faixas elásticas",
  "Novos exercícios adicionados",
  "Atualizações mensais",
  "Grupo de alunas",
];

const completeItems = [
  "Pilates em casa",
  "Yoga",
  "Módulo completo ElasticFit",
  "Treinos com faixas elásticas",
  "Novos exercícios adicionados",
  "Atualizações mensais",
  "Grupo de alunas",
  "Acesso completo à plataforma",
  "Acesso vitalício",
];

function PlanList({ items }) {
  return (
    <ul className="homefit-plan__list">
      {items.map((item) => (
        <li key={item}><Check aria-hidden="true" size={17} strokeWidth={3} />{item}</li>
      ))}
    </ul>
  );
}

function UnavailableList({ items }) {
  return (
    <div className="homefit-plan__unavailable">
      <p>Não inclui:</p>
      <ul>
        {items.map((item) => (
          <li key={item}><X aria-hidden="true" size={16} strokeWidth={3} />{item}</li>
        ))}
      </ul>
    </div>
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
            <UnavailableList items={basicUnavailableItems} />
            <p className="homefit-plan__old">De R$49,90</p>
            <p className="homefit-plan__price">POR APENAS <strong>R$19,90</strong></p>
            <p className="homefit-plan__note">Pagamento único. Acesso imediato.</p>
            <CTAButton fullWidth onClick={() => setIsDiscountOpen(true)}>QUERO O PLANO BÁSICO</CTAButton>
          </article>
          <article className="homefit-plan homefit-plan--complete">
            <p className="homefit-plan__badge">MAIS ESCOLHIDO</p>
            <h2>PLANO COMPLETO</h2>
            <h3>Sua academia completa em casa</h3>
            <p className="homefit-plan__plus">Tudo do Plano Básico +</p>
            <PlanList items={completeItems} />
            <p className="homefit-plan__old">De R$89,90</p>
            <p className="homefit-plan__price">POR APENAS <strong>R$29,90</strong></p>
            <p className="homefit-plan__note">Pagamento único. Acesso imediato.</p>
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
              por apenas <strong>R$ 24,90!</strong>
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