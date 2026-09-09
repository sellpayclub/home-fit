import { Check } from "lucide-react";

const audienceItems = [
  "não quer pagar academia",
  "prefere treinar em casa",
  "está começando agora",
  "quer voltar a se exercitar",
  "gosta de Pilates ou Yoga",
  "quer fortalecer e trabalhar o corpo inteiro",
  "quer treinos simples para acompanhar pelo celular",
];

export default function AudienceSection() {
  return (
    <section className="section audience-section">
      <div className="page-shell narrow-content">
        <div className="section-heading section-heading--center">
          <h2>Para quem é?</h2>
          <p>Para quem:</p>
        </div>

        <ul className="audience-list">
          {audienceItems.map((item) => (
            <li key={item}>
              <span className="audience-list__icon" aria-hidden="true">
                <Check size={18} strokeWidth={3} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}