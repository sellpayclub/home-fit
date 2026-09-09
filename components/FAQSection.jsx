import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";

const questions = [
  {
    question: "Preciso ter experiência?",
    answer: "Não. Existem exercícios simples para quem está começando.",
  },
  {
    question: "Preciso ir à academia?",
    answer: "Não. O programa foi pensado para ser feito em casa.",
  },
  {
    question: "O kit de elásticos está incluso?",
    answer:
      "O kit elástico profissional de treino será enviado pra você e você receberá acesso ao fornecedor e poderá comprar por apenas 11 reais COM FRETE GRÁTIS",
    image: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a433669a-d6fd-47a5-a6aa-08e2c11174a3.png",
  },
  {
    question: "Como recebo o acesso a plataforma de exercícios?",
    answer:
      "Após a confirmação do pagamento, você recebe as instruções de acesso no seu email e whatsapp.",
  },
  {
    question: "O pagamento é único?",
    answer: "Sim!",
  },
];

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="section faq-section">
      <div className="page-shell faq-shell">
        <div className="section-heading section-heading--center">
          <h2>Perguntas frequentes</h2>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" size={21} strokeWidth={2.2} />
                </button>
                <div
                  className="faq-answer"
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                  {item.image && (
                    <img
                      className="faq-answer__kit-image"
                      src={item.image}
                      alt="Preço do kit de 5 faixas elásticas por R$ 10,99 com frete grátis"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="final-cta">
          <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
        </div>
      </div>
    </section>
  );
}