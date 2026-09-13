import { Dumbbell, RefreshCw, Sparkles, Infinity } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Mais de 100 Exercícios",
    subtitle: "Para toda região do corpo e todos sem impacto e seguro",
  },
  {
    icon: RefreshCw,
    title: "Exercícios Atualizados",
    subtitle: "todos os meses nossos professores gravam novas sequencias pra você",
  },
  {
    icon: Sparkles,
    title: "+ de 10 modalidades diferentes",
    subtitle: "deis de pilates até yoga pra você nunca enjoar de praticar atividade fisica",
  },
  {
    icon: Infinity,
    title: "Acesso Vitalício",
    subtitle: "Pague uma vez, tenha acesso pra sempre",
  },
];

export default function HomeFitBenefits() {
  return (
    <section className="section homefit-benefits">
      <div className="page-shell">
        <div className="section-heading section-heading--center">
          <h2>Por que escolher o HomeFit?</h2>
          <p>Aqui estão os benefícios exclusivos para você</p>
        </div>

        <div className="homefit-benefits__grid">
          {benefits.map(({ icon: Icon, title, subtitle }) => (
            <article className="homefit-benefits__item" key={title}>
              <span className="homefit-benefits__icon" aria-hidden="true">
                <Icon size={29} strokeWidth={2.3} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}