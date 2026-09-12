import { useEffect, useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import TrackingBridge from "./TrackingBridge";

const PROFILE_KEY = "__homefit_quiz_profile_v1";
const PROFILE_VALIDITY_MS = 30 * 24 * 60 * 60 * 1000;

const analysisSteps = [
  "Analisando sua idade...",
  "Objetivo corporal...",
  "Limitações e dores...",
  "Nível de condicionamento...",
  "Tempo disponível...",
  "Equipamentos disponíveis...",
];

function valueOrFallback(value, fallback) {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : fallback;
  }

  return value || fallback;
}

export default function DiagnosisPage() {
  const [profile, setProfile] = useState(null);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isContentUnlocked, setIsContentUnlocked] = useState(false);

  useEffect(() => {
    try {
      const savedProfile = JSON.parse(window.localStorage.getItem(PROFILE_KEY));

      if (
        !savedProfile ||
        !savedProfile.answers ||
        !savedProfile.savedAt ||
        Date.now() - savedProfile.savedAt > PROFILE_VALIDITY_MS
      ) {
        setProfile({});
        return;
      }

      setProfile(savedProfile.answers);
    } catch {
      setProfile({});
    }
  }, []);

  useEffect(() => {
    if (!profile || !Object.keys(profile).length) return undefined;

    const timer = window.setInterval(() => {
      setAnalysisStep((currentStep) => {
        if (currentStep === analysisSteps.length - 1) {
          window.clearInterval(timer);
          setIsReady(true);
          return currentStep;
        }

        return currentStep + 1;
      });
    }, 780);

    return () => window.clearInterval(timer);
  }, [profile]);

  useEffect(() => {
    if (!isReady) return undefined;

    const timer = window.setTimeout(() => {
      setIsContentUnlocked(true);
    }, 4 * 60 * 1000);

    return () => window.clearTimeout(timer);
  }, [isReady]);

  if (!profile) {
    return (
      <main className="diagnosis-page">
        <TrackingBridge />
      </main>
    );
  }

  if (!Object.keys(profile).length) {
    return (
      <main className="diagnosis-page">
        <TrackingBridge />
        <section className="diagnosis-empty">
          <div className="quiz-shell">
            <img
              className="quiz-logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <div className="quiz-intro__card">
              <h1>Vamos montar seu plano de exercícios em casa!</h1>
              <p>Responda as perguntas para preparar sua recomendação personalizada.</p>
              <a className="quiz-primary-button" href="/quiz">
                <span>COMEÇAR MEU PLANO</span>
                <ChevronRight aria-hidden="true" size={21} strokeWidth={3} />
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const name = profile.name || "Seu";
  const care = valueOrFallback(profile.pains, "Não tenho dores/patologias");

  return (
    <main className="diagnosis-page">
      <TrackingBridge />
      {!isReady ? (
        <section className="diagnosis-processing">
          <div className="quiz-shell">
            <img
              className="quiz-logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <div className="diagnosis-processing__card">
              <div className="diagnosis-spinner" aria-hidden="true" />
              <h1>{name}, estamos preparando seu perfil e exercícios HomeFit pra você…</h1>
              <div className="diagnosis-analysis-list">
                {analysisSteps.map((item, index) => (
                  <div
                    className={`diagnosis-analysis-item${index <= analysisStep ? " is-active" : ""}${index < analysisStep ? " is-complete" : ""}`}
                    key={item}
                  >
                    <span>{index < analysisStep ? <Check size={16} strokeWidth={3} /> : ""}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="diagnosis-result">
          <div className="quiz-shell">
            <header className="diagnosis-result__header">
              <img
                className="quiz-logo"
                src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
                alt="Logo Método HomeFit"
              />
              <span>SEU PERFIL ESTÁ PRONTO</span>
              <h1>{name}, seu perfil HomeFit está pronto! 🎉</h1>
              <p className="diagnosis-result__video-title">
                Veja como funciona o Método de Treino Metabólico HIIT que{" "}
                <strong className="diagnosis-result__video-highlight">
                  Queima MAIS gordura e calorias em 5 minutos
                </strong>
                , do que 1 hora de academia:
              </p>
              <div className="diagnosis-result__video">
                <iframe
                  src="https://play.tynk.ai/p/62bc8700-bc7e-402b-86e8-ec5be8c2c20e"
                  title="Método de Treino Metabólico HIIT"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </header>

            {isContentUnlocked && (
              <div className="diagnosis-result__unlocked">
                <div className="diagnosis-result__video-cta">
                  <a className="quiz-primary-button" href="/homefit#homefit-planos">
                    <span>VER MEU PLANO HOMEFIT</span>
                    <ChevronRight aria-hidden="true" size={21} strokeWidth={3} />
                  </a>
                </div>

                <p className="diagnosis-result__description">
                  Com base nas suas respostas, identificamos o caminho mais adequado para você começar seus exercícios em casa.
                </p>

                <div className="diagnosis-summary">
                  <div>
                    <span>Seu objetivo principal</span>
                    <strong>{valueOrFallback(profile.goal, "Um pouco de tudo!")}</strong>
                  </div>
                  <div>
                    <span>Seu corpo hoje</span>
                    <strong>{valueOrFallback(profile.body, "Seu perfil personalizado")}</strong>
                  </div>
                  <div>
                    <span>Região que mais incomoda</span>
                    <strong>{valueOrFallback(profile.region, "Corpo inteiro")}</strong>
                  </div>
                  <div>
                    <span>Seu nível atual</span>
                    <strong>Iniciante</strong>
                  </div>
                  <div>
                    <span>Tempo disponível</span>
                    <strong>{valueOrFallback(profile.time, "No seu ritmo")}</strong>
                  </div>
                  <div>
                    <span>Cuidados importantes</span>
                    <strong>{care}</strong>
                  </div>
                </div>

                <div className="diagnosis-meaning">
                  <h2>O que isso significa para você</h2>
                  <p>Para o seu perfil, o ideal é começar com exercícios:</p>
                  <ul>
                    <li><Check aria-hidden="true" size={18} strokeWidth={3} />de baixo impacto;</li>
                    <li><Check aria-hidden="true" size={18} strokeWidth={3} />simples de acompanhar;</li>
                    <li><Check aria-hidden="true" size={18} strokeWidth={3} />que não exigem academia;</li>
                    <li><Check aria-hidden="true" size={18} strokeWidth={3} />adaptados ao seu nível;</li>
                    <li><Check aria-hidden="true" size={18} strokeWidth={3} />com foco no seu objetivo;</li>
                    <li><Check aria-hidden="true" size={18} strokeWidth={3} />feitos no seu ritmo.</li>
                  </ul>
                </div>

                <section className="diagnosis-stories">
                  <h2>Mulheres com um perfil parecido com o seu também começaram assim e tiveram resultados</h2>
                  <div className="diagnosis-stories__testimonials">
                    <img
                      src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a13f61e2-06e3-4c31-9424-3ee139f516e0.jpg"
                      alt="Depoimento com antes e depois de aluna"
                    />
                    <img
                      src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/aeca10e2-daaa-4f3e-8b73-afb9d2d66303.jpg"
                      alt="Depoimento com transformação de aluna"
                    />
                    <img
                      src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/328007fe-e78e-465d-9fa6-303dec4c3c9f.jpg"
                      alt="Depoimento com antes e depois de aluna"
                    />
                    <img
                      src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ef43a139-4e05-4143-897e-2cd327a97154.png"
                      alt="Depoimentos de alunas HomeFit"
                    />
                  </div>
                </section>

                <div className="diagnosis-result__action">
                  <a className="quiz-primary-button" href="/homefit">
                    <span>VER MEU PLANO HOMEFIT</span>
                    <ChevronRight aria-hidden="true" size={21} strokeWidth={3} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}