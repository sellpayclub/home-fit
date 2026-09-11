import { useState } from "react";
import { useRouter } from "next/router";
import { Check, ChevronRight } from "lucide-react";
import TrackingBridge from "./TrackingBridge";

const PROFILE_KEY = "__homefit_quiz_profile_v1";

const bodyImages = {
  "Muito acima do peso": "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/3a67a746-20f8-4755-afd6-9c7e53583d88.jpg",
  "Um pouco acima do peso": "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b9bcbd19-8b46-4aa1-836e-8aae811813b3.jpg",
  "Falsa magra": "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ed77b96a-2351-4772-bc01-eaa60f6e0b9a.jpg",
  Magra: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/0bd439ec-da2d-483f-a327-8864456c2814.jpg",
};

const questions = [
  {
    id: "age",
    title: "Qual sua Idade?",
    subtitle: "Escolha uma opção abaixo:",
    type: "single",
    options: ["40-50 anos", "51-60 anos", "61-70 anos", "71 anos mais"],
  },
  {
    id: "body",
    title: "Como você classifica seu corpo hoje?",
    type: "body",
    options: [
      "Muito acima do peso",
      "Um pouco acima do peso",
      "Falsa magra",
      "Magra",
    ],
  },
  {
    id: "goal",
    title: "Qual é o seu principal objetivo com os exercícios?",
    subtitle: "Escolha o que mais combina com você:",
    type: "single",
    options: [
      "🔥 Emagrecer e reduzir medidas",
      "🍑 Fortalecer pernas e glúteos",
      "💪 Ganhar força e firmeza no corpo",
      "🧘 Melhorar mobilidade e diminuir desconfortos",
      "❤️ Ter mais disposição e saúde no dia a dia",
      "✨ Um pouco de tudo!",
    ],
  },
  {
    id: "region",
    title: "Qual região do seu corpo mais incomoda hoje?",
    subtitle: "Selecione até 2 opções:",
    type: "multiple",
    max: 2,
    options: [
      "Barriga e cintura",
      "Pernas",
      "Glúteos",
      "Braços",
      "Costas",
      "Corpo inteiro",
    ],
  },
  {
    id: "pains",
    title: "Você tem alguma Dor no Corpo ou Patologia?",
    subtitle: "Selecione todas opções abaixo que você tem:",
    type: "multiple",
    options: [
      "Dar na coluna/lombar/cervical",
      "Dor no joelho/quadril/ombro",
      "Hérnia de disco/bico papagaio",
      "Artrite/artrose/osteoporose",
      "Fibromialgia",
      "Outros",
      "Não tenho dores/patologias",
    ],
  },
  {
    id: "difficulty",
    title: "Essas Patologia e Dores, causam alguma dificuldade em algumas coisas no seu dia a dia?",
    type: "single",
    options: [
      "SIM! Tenho dificuldade em várias coisas",
      "Não tenho dificuldade em nada",
    ],
  },
  {
    id: "weightGoal",
    title: "Quanto você quer emagrecer?",
    subtitle: "Conte para nós o seu objetivo:",
    type: "input",
    placeholder: "Digite sua resposta",
  },
  {
    id: "metabolism",
    title: "Como é seu metabolismo?",
    type: "single",
    options: [
      "🐢 Lento- Difícil para perder e fácil para ganhar peso",
      "🔥 Acelerado- Fácil de perder e difícil para ganhar peso",
    ],
  },
  {
    id: "routine",
    title: "Como é sua rotina de exercícios atualmente?",
    type: "single",
    options: [
      "🛋️ Não faço nenhum exercício",
      "🚶 Faço alguma atividade 1 ou 2 vezes por semana",
      "🏃 Faço exercícios 3 ou mais vezes por semana",
      "🔄 Já treinei antes, mas estou voltando agora",
    ],
  },
  {
    id: "time",
    title: "Quanto tempo você consegue separar para cuidar de você por dia?",
    type: "single",
    options: [
      "⏱️ 10 a 15 minutos",
      "⏱️ 20 a 30 minutos",
      "⏱️ 30 a 45 minutos",
      "⏱️ Mais de 45 minutos",
    ],
  },
  {
    id: "equipment",
    title: "Quais equipamentos você tem disponíveis?",
    subtitle: "Selecione todas as opções que você tem:",
    type: "multiple",
    options: [
      "Não tenho equipamentos",
      "Faixas elásticas",
      "Pesos",
      "Colchonete",
      "Outros",
    ],
  },
  {
    id: "intensity",
    title: "Qual intensidade você deseja para começar?",
    type: "single",
    options: ["Leve", "Moderada", "Intensa"],
  },
  {
    id: "name",
    title: "Qual seu NOME?",
    type: "input",
    placeholder: "Digite seu nome",
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const question = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const saveAndContinue = (nextAnswers) => {
    try {
      window.localStorage.setItem(
        PROFILE_KEY,
        JSON.stringify({
          answers: nextAnswers,
          savedAt: Date.now(),
        })
      );
    } catch {
      return;
    }

    router.push("/diagnostico");
  };

  const advance = () => {
    if (step === questions.length - 1) {
      saveAndContinue(answers);
      return;
    }

    setStep((currentStep) => currentStep + 1);
  };

  const selectSingle = (value) => {
    const nextAnswers = { ...answers, [question.id]: value };
    setAnswers(nextAnswers);

    window.setTimeout(() => {
      if (step === questions.length - 1) {
        saveAndContinue(nextAnswers);
      } else {
        setStep((currentStep) => currentStep + 1);
      }
    }, 180);
  };

  const toggleMultiple = (value) => {
    const currentValues = answers[question.id] || [];
    const isNoPainOption =
      question.id === "pains" && value === "Não tenho dores/patologias";

    let nextValues;

    if (isNoPainOption) {
      nextValues = currentValues.includes(value) ? [] : [value];
    } else if (currentValues.includes(value)) {
      nextValues = currentValues.filter((item) => item !== value);
    } else {
      const valuesWithoutNoPain =
        question.id === "pains"
          ? currentValues.filter((item) => item !== "Não tenho dores/patologias")
          : currentValues;

      if (question.max && valuesWithoutNoPain.length >= question.max) {
        return;
      }

      nextValues = [...valuesWithoutNoPain, value];
    }

    setAnswers({ ...answers, [question.id]: nextValues });
  };

  const setInputAnswer = (value) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const canContinue = question.type === "multiple"
    ? (answers[question.id] || []).length > 0
    : Boolean(answers[question.id] && answers[question.id].trim());

  if (!started) {
    return (
      <main className="quiz-page">
        <TrackingBridge />
        <section className="quiz-intro">
          <div className="quiz-shell">
            <img
              className="quiz-logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <div className="quiz-intro__card">
              <span className="quiz-intro__tag">PLANO PERSONALIZADO</span>
              <h1>Vamos montar seu plano de exercícios em casa!</h1>
              <p>
                Responda algumas perguntas rápidas sobre seu corpo, seus objetivos e sua rotina.
              </p>
              <p>
                Com suas respostas, vamos preparar uma recomendação de exercícios mais adequada para você começar.
              </p>
              <img
                className="quiz-intro__image"
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7b4c8614-b942-48fc-9cf9-75f3380b2b9c.jpg"
                alt="Mulher sentada mostrando o plano de exercícios HomeFit no celular"
              />
              <button
                type="button"
                className="quiz-primary-button"
                onClick={() => setStarted(true)}
              >
                <span>COMEÇAR MEU PLANO</span>
                <ChevronRight aria-hidden="true" size={21} strokeWidth={3} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <TrackingBridge />
      <section className="quiz-flow">
        <div className="quiz-shell">
          <header className="quiz-header">
            <img
              className="quiz-logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <div className="quiz-progress" aria-label="Progresso do questionário">
              <span style={{ width: `${progress}%` }} />
            </div>
          </header>

          <div className="quiz-question-card">
            <p className="quiz-question-card__eyebrow">SEU PLANO HOMEFIT</p>
            <h1>{question.title}</h1>
            {question.subtitle && <p className="quiz-question-card__subtitle">{question.subtitle}</p>}

            {question.type === "body" && (
              <div className="quiz-body-options">
                {question.options.map((option, index) => (
                  <button
                    type="button"
                    key={option}
                    className={`quiz-body-option quiz-body-option--${index + 1}${answers[question.id] === option ? " is-selected" : ""}`}
                    onClick={() => selectSingle(option)}
                  >
                    <span className="quiz-body-option__visual">
                      <img
                        src={bodyImages[option]}
                        alt={`Exemplo de corpo: ${option}`}
                      />
                    </span>
                    <span>{option}</span>
                  </button>
                ))}
              </div>
            )}

            {question.type === "single" && (
              <div className="quiz-options">
                {question.options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={`quiz-option${answers[question.id] === option ? " is-selected" : ""}`}
                    onClick={() => selectSingle(option)}
                  >
                    <span>{option}</span>
                    <ChevronRight aria-hidden="true" size={20} strokeWidth={2.5} />
                  </button>
                ))}
              </div>
            )}

            {question.type === "multiple" && (
              <>
                <div className="quiz-options">
                  {question.options.map((option) => {
                    const isSelected = (answers[question.id] || []).includes(option);

                    return (
                      <button
                        type="button"
                        key={option}
                        className={`quiz-option quiz-option--multiple${isSelected ? " is-selected" : ""}`}
                        onClick={() => toggleMultiple(option)}
                      >
                        <span className="quiz-option__check" aria-hidden="true">
                          {isSelected && <Check size={16} strokeWidth={3} />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="quiz-primary-button quiz-primary-button--continue"
                  disabled={!canContinue}
                  onClick={advance}
                >
                  <span>CONTINUAR</span>
                  <ChevronRight aria-hidden="true" size={21} strokeWidth={3} />
                </button>
              </>
            )}

            {question.type === "input" && (
              <>
                <input
                  className="quiz-input"
                  type="text"
                  value={answers[question.id] || ""}
                  onChange={(event) => setInputAnswer(event.target.value)}
                  placeholder={question.placeholder}
                  autoComplete="off"
                />
                <button
                  type="button"
                  className="quiz-primary-button quiz-primary-button--continue"
                  disabled={!canContinue}
                  onClick={advance}
                >
                  <span>CONTINUAR</span>
                  <ChevronRight aria-hidden="true" size={21} strokeWidth={3} />
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}