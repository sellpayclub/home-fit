import { useState } from "react";
import {
  Check,
  ChevronDown,
  HeartPulse,
  Move,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import CTAButton from "./CTAButton";
import TrackingBridge from "./TrackingBridge";
import { testimonials } from "./TestimonialsSection";

const MOCKUP_URL =
  "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/53e9597f-5615-49a1-bad8-d04989172fdd.jpg";
const PLANS_ANCHOR = "#dores-planos";

const painAreas = [
  "Lombar e costas",
  "Joelhos",
  "Pescoço e ombros",
  "Quadril",
  "Corpo travado e rígido",
];

const dailyChallenges = [
  "De manhã: Você levanta da cama e sente as costas, as pernas e tem dificuldade pra levantar.",
  "Fica muito tempo sentada e a lombar começa a incomodar.",
  "Subir escadas virou um sofrimento para os joelhos.",
  "Pescoço e ombros vivem tensos.",
  "Agachar, abaixar ou levantar parece cada vez mais difícil...",
];

const bodyPrograms = [
  {
    icon: "🦵",
    title: "JOELHOS",
    text: "Exercícios de fortalecimento e mobilidade.",
  },
  {
    icon: "🧍",
    title: "LOMBAR E COSTAS",
    text: "Rotinas para mobilidade, estabilidade e fortalecimento.",
  },
  {
    icon: "💆",
    title: "PESCOÇO E OMBROS",
    text: "Movimentos para tensão e rigidez.",
  },
  {
    icon: "🦴",
    title: "QUADRIL",
    text: "Mobilidade e fortalecimento para movimentos do dia a dia.",
  },
  {
    icon: "🤸",
    title: "CORPO TRAVADO",
    text: "Alongamentos e mobilidade para recuperar amplitude de movimento.",
  },
];

const benefits = [
  { icon: ShieldCheck, title: "Lombar Mais Forte" },
  { icon: ShieldCheck, title: "Joelhos Fortes" },
  { icon: HeartPulse, title: "Pescoço & Ombros" },
  { icon: Move, title: "Mobilidade do Quadril" },
  { icon: Sparkles, title: "Corpo Destravado" },
  { icon: Move, title: "Alongamento Diário" },
  { icon: HeartPulse, title: "Pilates de Baixo Impacto" },
  { icon: ShieldCheck, title: "Fortalecimento 40+" },
];

const planItems = [
  "Exercícios guiados para mobilidade e fortalecimento",
  "Aulas de alongamento e baixo impacto",
  "Rotinas para lombar, costas, joelhos, pescoço, ombros e quadril",
  "Acesso completo à plataforma",
  "Acesso vitalício",
];

const questions = [
  {
    question: "Preciso ter experiência com exercícios?",
    answer:
      "Não. As aulas são guiadas passo a passo e foram pensadas para você começar no seu ritmo, mesmo que esteja sedentária há anos.",
  },
  {
    question: "Preciso ir à academia?",
    answer:
      "Não. Você acompanha as aulas em casa, pelo celular, tablet, computador ou TV.",
  },
  {
    question: "Os exercícios são difíceis?",
    answer:
      "Não. O foco é em movimentos guiados, mobilidade, fortalecimento e exercícios de baixo impacto para evoluir gradualmente.",
  },
  {
    question: "Como recebo meu acesso?",
    answer:
      "Logo após a confirmação do pagamento, você recebe acesso à plataforma.",
  },
  {
    question: "O pagamento é mensal?",
    answer: "Não. Você faz um único pagamento e recebe seu acesso.",
  },
];

function CheckList({ items, className = "homefit-check-list" }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" size={18} strokeWidth={3} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DoresPage() {
  const [openQuestion, setOpenQuestion] = useState(0);
  const slides = [...testimonials, ...testimonials];

  return (
    <main className="homefit-page dores-page">
      <TrackingBridge />

      <section className="homefit-hero dores-hero">
        <div className="page-shell homefit-hero__layout">
          <div className="homefit-hero__copy">
            <img
              className="homefit-hero__logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <h1>Pare de Conviver Todos os Dias com um Corpo Dolorido e Travado!</h1>
            <div className="homefit-hero__mockup homefit-hero__mockup--mobile">
              <img
                src={MOCKUP_URL}
                alt="Plataforma HomeFit com exercícios guiados em dispositivos móveis"
              />
            </div>
            <p>
              Tenha acesso a exercícios guiados para fazer em casa que ajudam a melhorar mobilidade, fortalecer o corpo e aliviar as dores — mesmo que você esteja sedentária há anos.
            </p>
            <div className="dores-hero__areas">
              <strong>Exercícios para:</strong>
              <CheckList items={painAreas} />
            </div>
            <CTAButton href={PLANS_ANCHOR}>QUERO COMEÇAR A ME MOVIMENTAR</CTAButton>
          </div>

          <div className="homefit-hero__mockup homefit-hero__mockup--desktop">
            <img
              src={MOCKUP_URL}
              alt="Plataforma HomeFit com exercícios guiados em dispositivos móveis"
            />
          </div>
        </div>
      </section>

      <section className="section dores-day">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Seu Dia é assim:</h2>
          </div>
          <div className="dores-day__list">
            {dailyChallenges.map((challenge) => (
              <p key={challenge}>{challenge}</p>
            ))}
          </div>
          <div className="dores-day__answer">
            <h2>Então o HomeFit é pra você!</h2>
            <CTAButton href={PLANS_ANCHOR}>QUERO COMEÇAR A ME MOVIMENTAR</CTAButton>
          </div>
        </div>
      </section>

      <section className="section dores-recovery">
        <div className="narrow-content">
          <p className="dores-recovery__warning">
            PARE DE TOMAR REMÉDIOS QUE SÓ MASCARAM A DORES E NÃO CURAM O PROBLEMA!
          </p>
          <h2>Quanto menos você se movimenta, mais difícil pode ficar se movimentar!</h2>
          <p>
            O HomeFit reúne aulas de mobilidade, fortalecimento, alongamento e exercícios de baixo impacto, organizadas para você conseguir começar dentro de casa e evoluir gradualmente.
          </p>
          <div className="dores-recovery__points">
            <p><X aria-hidden="true" size={20} strokeWidth={3} />Não é academia pesada.</p>
            <p><X aria-hidden="true" size={20} strokeWidth={3} />Não precisa correr.</p>
            <p><X aria-hidden="true" size={20} strokeWidth={3} />Não precisa fazer exercícios dificeis.</p>
            <p><Check aria-hidden="true" size={20} strokeWidth={3} />É movimento direcionado para recuperar força, mobilidade e massa muscular</p>
          </div>
        </div>
      </section>

      <section className="section dores-programs">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <h2>Dentro do HomeFit você terá Exercicios para todo seu corpo:</h2>
          </div>
          <div className="dores-programs__grid">
            {bodyPrograms.map((program) => (
              <article className="dores-programs__item" key={program.title}>
                <span aria-hidden="true">{program.icon}</span>
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="centered-cta">
            <CTAButton href={PLANS_ANCHOR}>QUERO COMEÇAR A ME MOVIMENTAR</CTAButton>
          </div>
        </div>
      </section>

      <section className="section dores-benefits">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <p className="section-kicker">BENEFÍCIOS:</p>
            <h2>Volte a se movimentar com mais liberdade, força e confiança.</h2>
          </div>
          <div className="dores-benefits__grid">
            {benefits.map(({ icon: Icon, title }) => (
              <div className="dores-benefits__item" key={title}>
                <Icon aria-hidden="true" size={25} strokeWidth={2.4} />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section homefit-community dores-community">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <h2>Você pode cuidar do seu corpo dentro da sua própria casa</h2>
            <p>Acompanhe os exercícios no seu ritmo, no horário que funcionar melhor para você.</p>
          </div>
        </div>
        <div className="homefit-community__slider" aria-label="Pessoas treinando em casa">
          <div className="homefit-community__track">
            {slides.map((photo, index) => (
              <img
                key={`${photo.src}-${index}`}
                src={photo.src}
                alt={index < testimonials.length ? photo.alt : ""}
                aria-hidden={index >= testimonials.length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section homefit-plans" id="dores-planos">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <h2>Comece a cuidar do seu corpo hoje</h2>
          </div>
          <div className="homefit-plans__grid homefit-plans__grid--single">
            <article className="homefit-plan homefit-plan--complete homefit-plan--single">
              <p className="homefit-plan__badge">ACESSO COMPLETO</p>
              <h2>HOMEFIT</h2>
              <h3>Mobilidade, fortalecimento e movimento para o seu corpo</h3>
              <CheckList items={planItems} className="homefit-plan__list" />
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
                QUERO COMEÇAR A ME MOVIMENTAR
              </CTAButton>
            </article>
          </div>
        </div>
      </section>

      <section className="section homefit-faq">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Perguntas frequentes</h2>
          </div>
          <div className="homefit-faq__list">
            {questions.map((item, index) => {
              const isOpen = index === openQuestion;

              return (
                <div className="homefit-faq__item" key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown aria-hidden="true" size={21} />
                  </button>
                  {isOpen && <p>{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="homefit-final dores-final">
          <div className="narrow-content">
            <h2>Volte a se movimentar com mais liberdade, força e confiança.</h2>
            <p>Comece dentro da sua casa, no seu ritmo.</p>
            <CTAButton href={PLANS_ANCHOR}>QUERO COMEÇAR A ME MOVIMENTAR</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}