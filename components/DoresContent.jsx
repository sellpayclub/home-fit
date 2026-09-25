import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import CTAButton from "./CTAButton";
import TrackingBridge from "./TrackingBridge";
import { testimonials } from "./TestimonialsSection";

const MOCKUP_URL =
  "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/53e9597f-5615-49a1-bad8-d04989172fdd.jpg";
const PLANS_ANCHOR = "#dores-planos";

const heroAreas = [
  "Lombar e costas",
  "Joelhos",
  "Pescoço e ombros",
  "Quadril",
  "Corpo rígido e travado",
  "Mobilidade e fortalecimento geral",
];

const simpleThings = [
  "Levantar da cama sem precisar ir devagar por causa das costas.",
  "Subir uma escada sem sentir que seus joelhos estão reclamando a cada degrau.",
  "Ficar sentada sem terminar o dia com a lombar incomodando.",
  "Levantar os braços, se vestir, pentear o cabelo ou pegar alguma coisa no alto sem sentir os ombros travados.",
  "Abaixar, agachar ou levantar com mais segurança.",
  "Caminhar sem sentir seu corpo pesado e rígido.",
  "Dormir sem precisar trocar de posição o tempo inteiro tentando encontrar um jeito confortável.",
];

const problemPoints = [
  "Você deixa de caminhar.",
  "Evita certos movimentos.",
  "Pensa duas vezes antes de subir uma escada.",
  "Tem medo de travar novamente.",
  "Acorda com o corpo rígido.",
  "Vai dormir sentindo que não consegue encontrar uma posição confortável.",
];


const changeItems = [
  "Levantar com mais facilidade",
  "Caminhar com mais confiança",
  "Se sentir menos rígida",
  "Recuperar mobilidade",
  "Fortalecer regiões importantes do corpo",
  "Voltar a realizar movimentos do cotidiano",
  "Criar uma rotina simples de cuidado corporal",
  "Se sentir mais segura para se movimentar",
];

const accessItems = [
  "Rotinas para lombar e costas",
  "Exercícios para joelhos",
  "Exercícios para pescoço e ombros",
  "Mobilidade para quadril",
  "Alongamentos para corpo rígido",
  "Exercícios de baixo impacto",
  "Fortalecimento corporal",
  "Alongamento diário",
  "Pilates de baixo impacto",
  "Rotinas para quem está começando",
];

const planItems = [
  "Exercícios guiados de mobilidade e fortalecimento",
  "Lombar e costas",
  "Joelhos",
  "Pescoço e ombros",
  "Quadril",
  "Corpo rígido e travado",
  "Alongamentos",
  "Exercícios de baixo impacto",
  "Pilates de baixo impacto",
  "Fortalecimento corporal",
  "Todos os bônus",
  "Acesso completo à plataforma",
  "Acesso vitalício",
];

const regions = [
  {
    icon: "🦵",
    title: "JOELHOS",
    description:
      "Exercícios de mobilidade e fortalecimento para ajudar nos movimentos usados no dia a dia.",
    intro: "Ideal para quem sente dificuldade em atividades como:",
    items: [
      "subir e descer escadas",
      "levantar da cadeira",
      "caminhar",
      "agachar",
      "voltar a se exercitar",
    ],
  },
  {
    icon: "🧍",
    title: "LOMBAR E COSTAS",
    description:
      "Rotinas de mobilidade, alongamento e fortalecimento para quem sente as costas rígidas, cansadas ou travadas.",
    intro: "Para ajudar você a recuperar mais confiança para:",
    items: [
      "levantar",
      "caminhar",
      "trabalhar",
      "permanecer sentado",
      "realizar movimentos cotidianos",
    ],
  },
  {
    icon: "💆",
    title: "PESCOÇO E OMBROS",
    description: "Movimentos direcionados para trabalhar mobilidade e rigidez da região.",
    intro: "Para quem sente dificuldade ao:",
    items: [
      "movimentar o pescoço",
      "levantar os braços",
      "pegar objetos",
      "se vestir",
      "realizar tarefas do dia a dia",
    ],
  },
  {
    icon: "🦴",
    title: "QUADRIL",
    description:
      "Exercícios para mobilidade e fortalecimento de uma região fundamental para caminhar, levantar e se abaixar.",
  },
  {
    icon: "🤸",
    title: "CORPO TRAVADO E RÍGIDO",
    description:
      "Sequências para quem acorda sentindo que o corpo está duro ou sente que perdeu flexibilidade com o passar do tempo.",
    ending: "Exercícios para ajudar você a recuperar movimentos gradualmente.",
  },
];

const bonuses = [
  {
    title: "🎁 BÔNUS 1 — ROTINA EXPRESS DE 5 MINUTOS",
    text: "Para aqueles dias em que você está sem tempo, mas não quer deixar seu corpo completamente parado.",
    ending: "Uma rotina rápida para colocar o corpo em movimento.",
  },
  {
    title: "🎁 BÔNUS 2 — DESTRAVE SEU CORPO AO ACORDAR",
    text: "Uma sequência simples de mobilidade para quem sente que acorda rígida ou travada.",
    ending: "Comece o dia colocando seu corpo em movimento.",
  },
  {
    title: "🎁 BÔNUS 3 — MOBILIDADE ANTES DE DORMIR",
    text: "Uma sequência leve para movimentar o corpo no final do dia.",
    ending: "Ideal para quem termina o dia sentindo o corpo cansado e rígido.",
  },
  {
    title: "🎁 BÔNUS 4 — PLANO SOS: POR ONDE RECOMEÇAR",
    text: "Se você parar alguns dias ou sentir que seu corpo voltou a ficar travado, você terá uma orientação simples para saber por onde retomar.",
  },
  {
    title: "🎁 BÔNUS 5 — CALENDÁRIO CORPO EM MOVIMENTO — 21 DIAS",
    text: "Uma sequência organizada para ajudar você a transformar o cuidado com seu corpo em rotina.",
  },
];

const questions = [
  {
    question: "Preciso ter experiência com exercícios?",
    answer:
      "Não. As aulas são guiadas passo a passo e você pode começar no seu próprio ritmo, mesmo que esteja sedentária há bastante tempo.",
  },
  {
    question: "Preciso ir à academia?",
    answer:
      "Não. As rotinas foram pensadas para que você possa acompanhar dentro da sua própria casa.",
  },
  {
    question: "Os exercícios são difíceis?",
    answer:
      "O HomeFit possui exercícios de mobilidade, fortalecimento, alongamento e baixo impacto. Você pode acompanhar respeitando seu ritmo e sua condição atual.",
  },
  {
    question: "E se eu estiver com o corpo muito travado?",
    answer:
      "Comece devagar e respeite seus limites. Caso você tenha dor intensa, persistente, uma lesão diagnosticada ou alguma condição médica, procure orientação de um profissional de saúde antes de iniciar uma nova rotina de exercícios.",
  },
  {
    question: "Preciso fazer todos os exercícios?",
    answer:
      "Não. Você pode escolher as rotinas de acordo com a região que deseja trabalhar e com o momento atual do seu corpo.",
  },
  {
    question: "Quanto tempo preciso treinar?",
    answer:
      "Você poderá escolher entre diferentes rotinas e encaixá-las de acordo com sua disponibilidade. Inclusive, você recebe uma rotina expressa para dias mais corridos.",
  },
  {
    question: "Como recebo meu acesso?",
    answer:
      "Após a confirmação do pagamento, você recebe acesso à plataforma HomeFit para assistir às aulas online.",
  },
  {
    question: "O pagamento é mensal?",
    answer:
      "Não. Você paga apenas uma vez e recebe acesso vitalício ao conteúdo disponível na oferta.",
  },
  {
    question: "Posso assistir pelo celular?",
    answer:
      "Sim. Você pode acompanhar utilizando celular, tablet ou computador.",
  },
];

function CheckList({ items, className = "dores-check-list" }) {
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

function DoresCTA({ children }) {
  return <CTAButton href={PLANS_ANCHOR}>{children}</CTAButton>;
}

export default function DoresContent() {
  const [openQuestion, setOpenQuestion] = useState(0);
  const trainingSlides = [...testimonials, ...testimonials];

  return (
    <main className="homefit-page dores-page dores-page--expanded">
      <TrackingBridge />

      <section className="homefit-hero dores-hero">
        <div className="page-shell homefit-hero__layout">
          <div className="homefit-hero__copy">
            <img
              className="homefit-hero__logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <h1>Destrave o Seu Corpo e Volte a se movimentar Sem DORES</h1>
            <div className="homefit-hero__mockup homefit-hero__mockup--mobile">
              <img
                src={MOCKUP_URL}
                alt="Plataforma HomeFit com exercícios guiados em dispositivos móveis"
              />
            </div>
            <p>
              Tenha em casa uma rotina simples de exercícios guiados para ajudar você a recuperar mobilidade, força e confiança para se movimentar novamente.
            </p>
            <div className="dores-hero__areas">
              <strong>Exercícios guiados para:</strong>
              <CheckList items={heroAreas} />
            </div>
            <DoresCTA>QUERO COMEÇAR A CUIDAR DO MEU CORPO</DoresCTA>
          </div>

          <div className="homefit-hero__mockup homefit-hero__mockup--desktop">
            <img
              src={MOCKUP_URL}
              alt="Plataforma HomeFit com exercícios guiados em dispositivos móveis"
            />
          </div>
        </div>
      </section>

      <section className="section dores-story">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Volte a fazer as Coisas Simples Sem pensar e sentir dor o tempo todo.</h2>
          </div>
          <div className="dores-story__list">
            {simpleThings.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p className="dores-story__transition">
            Se essas situações estão começando a fazer parte da sua rotina...
          </p>
          <div className="dores-story__answer">
            <h2>O HomeFit foi criado para ajudar você a voltar a se movimentar.</h2>
            <DoresCTA>QUERO COMEÇAR A ME MOVIMENTAR</DoresCTA>
          </div>
        </div>
      </section>

      <section className="section dores-problem">
        <div className="narrow-content">
          <div className="section-heading">
            <h2>O Problema Não é Só a Dor</h2>
          </div>
          <p>O pior é quando ela começa a mudar a sua rotina.</p>
          <div className="dores-problem__list">
            {problemPoints.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p>E começa a pensar:</p>
          <h3>“Será que agora vou ter que aprender a conviver com isso?”</h3>
          <p>
            Muitas pessoas passam meses tentando esperar melhorar, procurando vídeos diferentes, fazendo movimentos aleatórios ou simplesmente evitando se mexer por medo de piorar.
          </p>
          <p>Mas existe uma maneira mais simples de começar.</p>
        </div>
      </section>


      <section className="section dores-regions">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <h2>Dentro do HomeFit Você Encontra Exercícios Para Diferentes Regiões do Corpo</h2>
          </div>
          <div className="dores-regions__grid">
            {regions.map((region) => (
              <article className="dores-region" key={region.title}>
                <span className="dores-region__icon" aria-hidden="true">{region.icon}</span>
                <div>
                  <h2>{region.title}</h2>
                  <p>{region.description}</p>
                  {region.intro && <p className="dores-region__intro">{region.intro}</p>}
                  {region.items && <CheckList items={region.items} />}
                  {region.ending && <p>{region.ending}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dores-changes">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>O Que Pode Mudar Quando Você Começa a Se Movimentar Novamente?</h2>
          </div>
          <p>O objetivo não é transformar você em atleta.</p>
          <p>É ajudar você a recuperar coisas que talvez tenham começado a ficar difíceis.</p>
          <CheckList items={changeItems} className="dores-check-list dores-check-list--large" />
        </div>
      </section>

      <section className="section dores-sedentary">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>“Mas Eu Estou Sedentária Há Anos...”</h2>
          </div>
          <p>Tudo bem.</p>
          <p>Você não precisa acompanhar o ritmo de ninguém.</p>
          <p>
            As aulas são guiadas passo a passo para que você possa começar respeitando suas limitações atuais.
          </p>
          <p>Você pode começar devagar.</p>
          <p>Fazer o que consegue.</p>
          <p>E evoluir gradualmente.</p>
          <h3>O importante é começar a colocar seu corpo em movimento novamente.</h3>
        </div>
      </section>

      <section className="section dores-home">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Faça Dentro da Sua Própria Casa</h2>
          </div>
          <div className="dores-home__copy">
            <p>Sem deslocamento.</p>
            <p>Sem academia lotada.</p>
            <p>Sem precisar adaptar sua vida ao horário de outra pessoa.</p>
          </div>
          <p>Pegue seu celular, tablet ou computador.</p>
          <p>Escolha uma aula.</p>
          <p>E acompanhe.</p>
          <h3>Você decide quando fazer.</h3>
          <div className="dores-home__times">
            <span>De manhã.</span>
            <span>À tarde.</span>
            <span>À noite.</span>
          </div>
          <p>Quando funcionar melhor para sua rotina.</p>
        </div>
        <div className="homefit-community__slider dores-home__carousel" aria-label="Pessoas treinando em casa">
          <div className="homefit-community__track">
            {trainingSlides.map((photo, index) => (
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


      <section className="section dores-access">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Você Recebe Acesso a:</h2>
          </div>
          <CheckList items={accessItems} className="dores-check-list dores-check-list--large" />
        </div>
      </section>

      <section className="section dores-bonuses">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <h2>E Ainda Recebe Estes Bônus</h2>
          </div>
          <div className="dores-bonuses__grid">
            {bonuses.map((bonus) => (
              <article className="dores-bonus" key={bonus.title}>
                <h3>{bonus.title}</h3>
                <p>{bonus.text}</p>
                {bonus.ending && <p>{bonus.ending}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dores-value">
        <div className="narrow-content">
          <div className="section-heading">
            <h2>Quanto Vale Voltar a Se Sentir Mais Confiante Para Se Movimentar?</h2>
          </div>
          <p>
            Pense no custo de continuar deixando a dor e a rigidez comandarem suas escolhas.
          </p>
          <div className="dores-value__examples">
            <p>Uma noite mal dormida.</p>
            <p>Um passeio que você evita.</p>
            <p>Uma escada que virou problema.</p>
            <p>Um movimento que você tem medo de fazer.</p>
            <p>Uma caminhada que você deixou para depois.</p>
            <p>Uma atividade que você gostava e parou de praticar.</p>
          </div>
          <h3>O verdadeiro custo não está apenas no dinheiro.</h3>
          <p>Está nas coisas que você deixa de fazer.</p>
        </div>
      </section>

      <section className="section dores-spending">
        <div className="narrow-content">
          <div className="section-heading">
            <h2>E Quanto Você Já Gastou Tentando Se Sentir Melhor?</h2>
          </div>
          <div className="dores-spending__list">
            <p>Consultas.</p>
            <p>Massagens.</p>
            <p>Fisioterapia.</p>
            <p>Medicamentos.</p>
            <p>Sessões.</p>
            <p>Equipamentos.</p>
            <p>Diferentes tentativas.</p>
          </div>

        </div>
      </section>

      <section className="section homefit-plans dores-plans" id="dores-planos">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <h2>COMEÇE A CUIDAR DO SEU CORPO HOJE</h2>
          </div>
          <div className="homefit-plans__grid homefit-plans__grid--single">
            <article className="homefit-plan homefit-plan--complete homefit-plan--single">
              <p className="homefit-plan__badge">ACESSO COMPLETO AO HOMEFIT</p>
              <h3>Você recebe:</h3>
              <CheckList items={planItems} className="homefit-plan__list" />
              <p className="homefit-plan__old">De R$89,90</p>
              <p className="homefit-plan__price">
                <span>POR APENAS:</span>
                <span className="homefit-plan__installment">
                  <span>3x de</span>
                  <strong>R$9,90</strong>
                </span>
                <small>ou <b>R$29,90 à vista</b></small>
              </p>
              <p className="homefit-plan__note">Pagamento único.</p>
              <p className="homefit-plan__note">Acesso imediato.</p>
              <p className="homefit-plan__note">Sem mensalidade.</p>
              <CTAButton fullWidth href="https://checkout.sellpay.com.br/c/bdy5">
                QUERO TER ACESSO AO HOMEFIT
              </CTAButton>
            </article>
          </div>
        </div>
      </section>

      <section className="section dores-guarantee">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Você Tem 7 Dias Para Conhecer o HomeFit</h2>
          </div>
          <p>Entre na plataforma.</p>
          <p>Conheça as aulas.</p>
          <p>Veja como tudo funciona.</p>
          <p>Experimente as rotinas.</p>
          <p>
            Se dentro de 7 dias você entender que o HomeFit não faz sentido para você, poderá solicitar seu reembolso dentro do prazo da garantia.
          </p>
          <h3>Você pode conhecer sem assumir o risco.</h3>
          <div className="centered-cta">
            <DoresCTA>QUERO COMEÇAR AGORA</DoresCTA>
          </div>
        </div>
      </section>

      <section className="section homefit-faq dores-faq">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Perguntas Frequentes</h2>
          </div>
          <div className="homefit-faq__list">
            {questions.map((item, index) => {
              const isOpen = openQuestion === index;

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
      </section>

      <section className="homefit-final dores-final">
        <div className="narrow-content">
          <h2>Seu Corpo Não Precisa Estar Perfeito Para Você Começar.</h2>
          <p>Ele Só Precisa Começar a Se Movimentar.</p>
          <p>Talvez hoje você esteja mais rígida.</p>
          <p>Talvez tenha perdido força.</p>
          <p>Talvez algumas coisas simples estejam ficando mais difíceis.</p>
          <p>Você não precisa mudar tudo de uma vez.</p>
          <p>Comece dentro da sua casa.</p>
          <p>No seu ritmo.</p>
          <p>Um movimento de cada vez.</p>
          <h3>Tenha uma rotina pronta sempre que seu corpo precisar.</h3>
          <p className="dores-final__price">HOMEFIT — ACESSO COMPLETO POR R$29,90</p>
          <DoresCTA>QUERO COMEÇAR A ME MOVIMENTAR</DoresCTA>
        </div>
      </section>
    </main>
  );
}