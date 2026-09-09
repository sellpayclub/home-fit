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

const elasticItems = ["Pernas", "Glúteos", "Abdômen", "Braços", "Costas", "Corpo inteiro"];

export default function HomeFitContent() {
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

        <div className="homefit-equipment">
          <div className="homefit-copy-block">
            <h2>Não tem equipamento? Não tem problema.</h2>
            <p>Você pode começar utilizando <strong>apenas o peso do próprio corpo</strong>.</p>
            <p>Dentro do HomeFit existem diversos exercícios que não precisam de nenhum equipamento.</p>
            <p>E, se quiser intensificar seus treinos depois, você também terá acesso ao módulo especial:</p>
            <h2 className="homefit-equipment__title">ElasticFit</h2>
            <p>Treinos completos utilizando faixas elásticas para trabalhar:</p>
            <ul className="homefit-check-list homefit-check-list--compact">
              {elasticItems.map((item) => (
                <li key={item}><Check aria-hidden="true" size={18} strokeWidth={3} />{item}</li>
              ))}
            </ul>
            <p>Você pode usar o elástico quando quiser — mas <strong>não precisa dele para começar</strong>.</p>
          </div>
          <div className="homefit-exercise-video">
            <iframe
              src="https://play.tynk.ai/p/d7785311-0121-482c-82ac-d8a38cb6e6c3"
              title="Exercícios em casa HomeFit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}