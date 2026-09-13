import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

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
  return (
    <section className="section homefit-plans" id="homefit-planos">
      <div className="page-shell">
        <div className="section-heading section-heading--center">
          <h2>Garanta seu acesso</h2>
        </div>
        <div className="homefit-plans__grid homefit-plans__grid--single">
          <article className="homefit-plan homefit-plan--complete homefit-plan--single">
            <p className="homefit-plan__badge">ACESSO COMPLETO</p>
            <h2>PLANO ÚNICO</h2>
            <h3>Sua academia completa em casa</h3>
            <PlanList items={completeItems} />
            <p className="homefit-plan__old">De R$89,90</p>
            <p className="homefit-plan__price">
              <span className="homefit-plan__installment">
                <span>3x de</span>
                <strong>R$ 9,90</strong>
                <span>no cartão</span>
              </span>
              <small>ou <b>R$ 29,90 à vista</b></small>
            </p>
            <p className="homefit-plan__note">Pagamento único. Acesso imediato.</p>
            <CTAButton fullWidth href="https://checkout.sellpay.com.br/c/bdy5">
              QUERO MEU ACESSO COMPLETO
            </CTAButton>
          </article>
        </div>
      </div>
    </section>
  );
}