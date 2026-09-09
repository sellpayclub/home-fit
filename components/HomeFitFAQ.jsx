import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";

const questions = [
  {
    question: "Preciso ter experiência?",
    answer: "Não. Existem exercícios para quem está começando e você acompanha cada movimento passo a passo.",
  },
  {
    question: "Preciso ir à academia?",
    answer: "Não. O HomeFit foi criado justamente para você conseguir treinar em casa.",
  },
  {
    question: "Preciso comprar equipamentos?",
    answer: "Não. Existem diversos treinos utilizando apenas o peso do próprio corpo.",
  },
  {
    question: "E os exercícios com elástico?",
    answer: "Eles ficam disponíveis dentro do módulo ElasticFit, no Plano Completo.",
  },
  {
    question: "Como recebo meu acesso?",
    answer: "Logo após a confirmação do pagamento, você recebe acesso à plataforma.",
  },
  {
    question: "Posso assistir pelo celular?",
    answer: "Sim. Você pode acessar pelo celular, tablet, computador ou TV.",
  },
  {
    question: "O pagamento é mensal?",
    answer: "Não. Você faz um único pagamento e recebe seu acesso.",
  },
];

export default function HomeFitFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section homefit-faq">
      <div className="narrow-content">
        <div className="section-heading section-heading--center">
          <h2>Perguntas frequentes</h2>
        </div>
        <div className="homefit-faq__list">
          {questions.map((item, index) => {
            const isOpen = index === open;
            return (
              <div className="homefit-faq__item" key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
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
      <div className="homefit-final">
        <div className="narrow-content">
          <h2>Sua academia completa agora pode estar dentro da sua casa.</h2>
          <p>Treinos para o corpo inteiro, Pilates, Yoga, alongamento e muito mais.</p>
          <p><strong>Escolha seu plano e comece hoje.</strong></p>
          <CTAButton href="/homefit#homefit-planos">QUERO COMEÇAR AGORA</CTAButton>
        </div>
      </div>
    </section>
  );
}