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
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/22854e06-e5d9-4d11-b95c-95f5267e3dfa.png",
    alt: "Capa do módulo Treinos na Academia",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/3a86f62e-6698-4fac-bb9c-9339343d2664.png",
    alt: "Capa do módulo Yoga",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/83e7fc18-6bea-4b38-91c2-b9c3b297045b.png",
    alt: "Capa do módulo Pilates",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/030cccff-b270-4bee-8fa6-65a1ca05afac.png",
    alt: "Capa do módulo Alongamento",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7f1f8ec4-d867-49a7-92e4-d8ea0611d05e.png",
    alt: "Capa do módulo Braços e Costas",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e6fe8bed-691c-4380-ac33-213ae7529883.png",
    alt: "Capa do módulo Abdômen",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d868b085-2a2e-4e57-8d9a-0358acd7f7da.png",
    alt: "Capa do módulo ElasticFit",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/6d4a4dbb-8bdc-44d1-a7f8-a58bb806f989.png",
    alt: "Capa do módulo Pernas e Glúteos",
  },
];

export default function HomeFitContent() {
  const moduleSlides = [...moduleCovers, ...moduleCovers];

  return (
    <section className="section homefit-content">
      <div className="page-shell">
        <div className="homefit-copy-block">
          <h2>Tudo que você precisa para treinar em casa em um só lugar</h2>
          <p>
            Ao entrar no <strong>HomeFit</strong>, você recebe acesso a uma plataforma completa de exercícios para escolher o treino que quiser fazer naquele dia.
          </p>
          <h3>Você recebe:</h3>
          <ul className="homefit-check-list">
            {platformItems.map((item) => (
              <li key={item}><Check aria-hidden="true" size={18} strokeWidth={3} />{item}</li>
            ))}
          </ul>
          <p className="homefit-highlight">Você escolhe o treino, aperta o play e começa.</p>
        </div>

        <div
          className="homefit-community__slider"
          aria-label="Capas dos módulos disponíveis no HomeFit"
          style={{ marginTop: "46px" }}
        >
          <div className="homefit-community__track">
            {moduleSlides.map((module, index) => (
              <img
                key={`${module.src}-${index}`}
                src={module.src}
                alt={index < moduleCovers.length ? module.alt : ""}
                aria-hidden={index >= moduleCovers.length}
                style={{
                  aspectRatio: "1 / 1",
                  objectFit: "contain",
                  background: "#ffffff",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}