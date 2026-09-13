import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const platformItems = [
  "Treinos completos em casa sem equipamentos",
  "Treinos para pernas e glúteos",
  "Treinos para abdômen",
  "Treinos para braços e costas",
  "Treinos para o corpo inteiro",
  "Aulas de Pilates em casa",
  "Aulas de Yoga",
  "Mobilidade e alongamento",
  "Exercícios para melhorar a flexibilidade",
  "Treinos com faixas elásticas",
  "Vídeos mostrando cada movimento passo a passo",
  "Acesso pelo celular, computador, tablet ou TV",
];

const moduleCovers = [
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e45ab842-c95b-40e4-8c99-0dd5ca8e3439.jpg",
    alt: "Programa Se Solta",
    title: "Se Solta",
    promise: "Destrave o corpo e volte a se sentir leve nos movimentos.",
    description: "Para quem se sente travada, dura e sem mobilidade. Aulas para soltar o corpo, ganhar flexibilidade e conseguir fazer movimentos que hoje parecem impossíveis.",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/cb0613bf-3d44-4c34-89fc-62b058a6442b.jpg",
    alt: "Programa Pilates na Parede",
    title: "Pilates na Parede",
    promise: "Barriga mais firme, corpo mais alongado e postura mais bonita.",
    description: "Use apenas a parede para trabalhar barriga, pernas, glúteos e postura com movimentos simples que ajudam a deixar o corpo mais firme e alongado.",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d0bd77f3-6f14-47c0-b065-01a225c0b3eb.jpg",
    alt: "Programa Hit Dance",
    title: "Hit Dance",
    promise: "Dance, sue e queime calorias sem perceber o tempo passar.",
    description: "Queime calorias dançando. Aulas intensas e divertidas para suar, emagrecer e mexer o corpo sem sentir que está fazendo um treino chato.",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/6853c12a-8dad-47a3-aa10-e653d881e2c4.jpg",
    alt: "Programa Cardio Queima Gordura",
    title: "Cardio Queima Gordura",
    promise: "Treinos curtos para suar muito e gastar mais calorias.",
    description: "Treinos para fazer você suar de verdade, acelerar o gasto calórico e ajudar a eliminar gordura sem precisar passar horas treinando.",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/c3eec892-47db-40ba-9800-a46f6c74d737.jpg",
    alt: "Programa Bumbum Durinho",
    title: "Bumbum Durinho",
    promise: "Mais firme, mais alto e mais desenhado.",
    description: "Treinos focados em levantar, firmar e dar mais volume aos glúteos, com exercícios que você consegue fazer em casa.",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b602228e-893e-4f61-a17d-7663f21046ff.jpg",
    alt: "Programa Cintura Fina",
    title: "Cintura Fina",
    promise: "Afine a silhueta e marque mais a cintura.",
    description: "Sequências para afinar visualmente a cintura, fortalecer o abdômen e criar uma silhueta mais marcada e feminina.",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ce7b288d-180e-4c97-bed8-67dd024f22cb.jpg",
    alt: "Programa Mamãe Sarada",
    title: "Mamãe Sarada",
    description: "Treinos pensados para a gestação para ajudar você a continuar ativa, controlar o ganho de peso e manter pernas, braços e glúteos mais firmes durante a gravidez.",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/8c84692d-9c1f-4ce3-8ae4-d71dd623c03b.jpg",
    alt: "Programa Elimina Bucho e Pochete",
    title: "Elimina Bucho e Pochete",
    promise: "Menos barriga. Menos pochete. Mais cintura aparecendo.",
    description: "Um programa focado em atacar a região que mais incomoda: barriga, pochete e cintura. Treinos para secar, endurecer o abdômen e deixar a silhueta mais enxuta.",
  },
];

export default function HomeFitContent() {
  const moduleSlides = [...moduleCovers, ...moduleCovers];
  const carouselRef = useRef(null);
  const draggingRef = useRef(false);
  const hoveringRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    let frameId;
    let lastTimestamp;

    const autoScroll = (timestamp) => {
      if (lastTimestamp && !draggingRef.current && !hoveringRef.current) {
        const elapsed = Math.min(timestamp - lastTimestamp, 48);
        carousel.scrollLeft += elapsed * 0.08;

        const loopPoint = carousel.scrollWidth / 2;
        if (carousel.scrollLeft >= loopPoint) {
          carousel.scrollLeft -= loopPoint;
        }
      }

      lastTimestamp = timestamp;
      frameId = window.requestAnimationFrame(autoScroll);
    };

    frameId = window.requestAnimationFrame(autoScroll);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handlePointerDown = (event) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    draggingRef.current = true;
    dragStartRef.current = {
      x: event.clientX,
      scrollLeft: carousel.scrollLeft,
    };
    carousel.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const carousel = carouselRef.current;
    if (!carousel || !draggingRef.current) return;

    carousel.scrollLeft = dragStartRef.current.scrollLeft - (event.clientX - dragStartRef.current.x);
  };

  const finishDragging = (event) => {
    draggingRef.current = false;
    carouselRef.current?.releasePointerCapture?.(event.pointerId);
  };

  return (
    <section className="section homefit-content">
      <div className="page-shell">
        <div className="homefit-copy-block">
          <h2>Tudo que você precisa para treinar em casa em um só lugar</h2>
          <p>
            Ao entrar no <strong>HomeFit</strong>, você recebe acesso a uma plataforma completa de exercícios para escolher o treino que quiser fazer naquele dia.
          </p>
          <h3 className="homefit-copy-block__receives">Você recebe:</h3>
          <ul className="homefit-check-list">
            {platformItems.map((item) => (
              <li key={item}><Check aria-hidden="true" size={18} strokeWidth={3} />{item}</li>
            ))}
          </ul>
          <p className="homefit-highlight">Você escolhe o treino, aperta o play e começa.</p>
        </div>

        <div className="section-heading section-heading--center" style={{ marginTop: "54px", marginBottom: "0" }}>
          <h2>Conheça alguns dos nossos programas</h2>
        </div>

        <div
          ref={carouselRef}
          className="homefit-community__slider homefit-programs-slider"
          aria-label="Capas dos programas disponíveis no HomeFit"
          style={{ marginTop: "28px" }}
          onPointerEnter={() => {
            hoveringRef.current = true;
          }}
          onPointerLeave={() => {
            hoveringRef.current = false;
            draggingRef.current = false;
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDragging}
          onPointerCancel={finishDragging}
        >
          <div className="homefit-community__track">
            {moduleSlides.map((module, index) => (
              <article
                className="homefit-program-card"
                key={`${module.src}-${index}`}
                aria-hidden={index >= moduleCovers.length}
              >
                <img
                  className="homefit-program-card__cover"
                  src={module.src}
                  alt={index < moduleCovers.length ? module.alt : ""}
                />
                <div className="homefit-program-card__content">
                  <h3>{module.title}</h3>
                  {module.promise && (
                    <p className="homefit-program-card__promise">{module.promise}</p>
                  )}
                  <p className="homefit-program-card__description">{module.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}