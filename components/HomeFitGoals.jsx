const goals = [
  "🍑 Trabalhar pernas e glúteos",
  "🔥 Fortalecer o abdômen",
  "💪 Tonificar braços e costas",
  "🧘 Fazer Pilates",
  "🤸 Melhorar sua flexibilidade",
  "🏠 Fazer um treino completo em casa",
  "Exercício de Fisioterapia",
  "Acabar com Dores do Corpo",
];

export default function HomeFitGoals() {
  return (
    <section className="section homefit-goals">
      <div className="narrow-content">
        <div className="section-heading section-heading--center">
          <h2>Treine de acordo com o seu objetivo</h2>
          <p>Não importa se hoje você quer:</p>
        </div>
        <div className="homefit-goals__list">
          {goals.map((goal) => <h3 key={goal}>{goal}</h3>)}
        </div>
        <p className="homefit-goals__closing">
          Dentro do HomeFit você simplesmente escolhe o treino que deseja fazer naquele dia.
        </p>
      </div>
    </section>
  );
}