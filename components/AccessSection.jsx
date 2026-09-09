import { useState } from "react";
import { Check, X } from "lucide-react";
import CTAButton, { getCheckoutUrl } from "./CTAButton";
import ExerciseVideoSection from "./ExerciseVideoSection";
import TestimonialsSection from "./TestimonialsSection";

const accessItems = [
  "KIT Elástico de Treino Completo Exclusivo Por Apenas R$ 11,00.",
  "Aulas de Pilates com elástico",
  "Aulas de Yoga com elástico",
  "Treinos de Musculação com elástico",
  "Exercícios de mobilidade e alongamento",
  "Treinos para pernas e glúteos",
  "Treinos para braços e costas",
  "Treinos para abdômen",
  "Exercícios para fazer em casa",
  "Vídeos passo a passo de cada movimento",
  "Acesso pelo celular",
];

const basicPlanItems = [
  "Exercícios com Elástico em Casa",
  "Pilates com Elástico",
  "Yoga com Elástico",
];

const completePlanItems = [
  "Tudo do plano Básico +",
  "Treino em Casa (sem elástico)",
  "Treino e Exercícios na Academia",
  "Pilates em Casa",
  "Atualização de Exercícios Mensalmente",
  "Grupo de Alunas",
];

export default function AccessSection() {
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);

  return (
    <section className="section access-section">
      <div className="page-shell access-layout">
        <div>
          <div className="section-heading">
            <h2>Você recebe acesso a:</h2>
          </div>

          <ul className="check-list">
            {accessItems.map((item) => (
              <li key={item}>
                <span className="check-list__icon" aria-hidden="true">
                  <Check size={17} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <ExerciseVideoSection />

        <TestimonialsSection />

        <div className="plans-stack" id="checkout">
          <h2 className="plans-stack__heading">Escolha o plano melhor para você</h2>
          <aside className="price-panel">
            <h3 className="price-panel__title">PLANO BÁSICO</h3>
            <ul className="plan-list">
              {basicPlanItems.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" size={16} strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="price-panel__headline" aria-label="DE R$49,90 POR R$19,90">
              <span className="price-panel__reference">
                <span className="price-panel__label">DE</span>
                <span className="price-panel__old-price">R$49,90</span>
                <span className="price-panel__label">POR</span>
              </span>
              <span className="price-panel__current-price">
                <small>R$</small>19,90
              </span>
            </p>
            <div className="price-panel__alert">
              <strong>OFERTA VALIDA APENAS ATÉ HOJE!</strong>
              <span>ultimo dia de desconto!</span>
            </div>
            <p className="price-panel__note">Pagamento único. Acesso imediato.</p>
            <CTAButton fullWidth onClick={() => setIsDiscountOpen(true)}>
              QUERO O PLANO BÁSICO
            </CTAButton>
          </aside>

          <aside className="price-panel price-panel--complete">
            <h3 className="price-panel__title">PLANO COMPLETO</h3>
            <ul className="plan-list">
              {completePlanItems.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" size={16} strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="price-panel__headline" aria-label="DE R$89,90 POR R$29,90">
              <span className="price-panel__reference">
                <span className="price-panel__label">DE</span>
                <span className="price-panel__old-price">R$89,90</span>
                <span className="price-panel__label">POR</span>
              </span>
              <span className="price-panel__current-price">
                <small>R$</small>29,90
              </span>
            </p>
            <div className="price-panel__alert">
              <strong>OFERTA VALIDA APENAS ATÉ HOJE!</strong>
              <span>ultimo dia de desconto!</span>
            </div>
            <p className="price-panel__note">Pagamento único. Acesso imediato.</p>
            <CTAButton
              fullWidth
              href="https://checkout.sellpay.com.br/c/i1vn"
            >
              QUERO O PLANO COMPLETO
            </CTAButton>
          </aside>
        </div>
      </div>

      {isDiscountOpen && (
        <div
          className="discount-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="discount-modal-title"
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
            <h2 id="discount-modal-title">
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