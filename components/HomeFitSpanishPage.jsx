import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import CTAButton from "./CTAButton";
import { testimonials } from "./TestimonialsSection";
import TrackingBridge from "./TrackingBridge";

const MOCKUP_URL = "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/2acc8f8a-2804-400d-a949-6153e3af97c7.jpg";
const PLANS_ANCHOR = "/homefit-es#homefit-es-planos";

const platformItems = [
  "Entrenamientos completos en casa sin equipamiento",
  "Entrenamientos para piernas y glúteos",
  "Entrenamientos para abdomen",
  "Entrenamientos para brazos y espalda",
  "Entrenamientos para todo el cuerpo",
  "Clases de Pilates en casa",
  "Clases de Yoga",
  "Movilidad y estiramiento",
  "Ejercicios para mejorar la flexibilidad",
  "Entrenamientos con bandas elásticas",
  "Videos que muestran cada movimiento paso a paso",
  "Acceso desde el celular, computadora, tablet o TV",
];

const elasticItems = ["Piernas", "Glúteos", "Abdomen", "Brazos", "Espalda", "Todo el cuerpo"];

const goals = [
  "🍑 Trabajar piernas y glúteos",
  "🔥 Fortalecer el abdomen",
  "💪 Tonificar brazos y espalda",
  "🧘 Hacer Pilates",
  "🤸 Mejorar tu flexibilidad",
  "🏠 Hacer un entrenamiento completo en casa",
];

const obstacles = [
  "gimnasio lleno",
  "mensualidad cada mes",
  "perder tiempo en el tráfico",
  "depender de aparatos complicados",
];

const essentialItems = [
  "Entrenamientos en casa sin equipamiento",
  "Piernas y glúteos",
  "Abdomen",
  "Brazos y espalda",
  "Todo el cuerpo",
  "Movilidad y estiramiento",
  "Acceso desde el celular",
];

const basicUnavailableItems = [
  "Pilates en casa",
  "Yoga",
  "Módulo completo ElasticFit",
  "Entrenamientos con bandas elásticas",
  "Nuevos ejercicios añadidos",
  "Actualizaciones mensuales",
  "Grupo de alumnas",
];

const completeItems = [
  "Pilates en casa",
  "Yoga",
  "Módulo completo ElasticFit",
  "Entrenamientos con bandas elásticas",
  "Nuevos ejercicios añadidos",
  "Actualizaciones mensuales",
  "Grupo de alumnas",
  "Acceso completo a la plataforma",
];

const audience = [
  "no quieres pagar el gimnasio todos los meses",
  "prefieres ejercitarte en casa",
  "estás empezando ahora",
  "estuviste un tiempo sin entrenar y quieres volver",
  "quieres fortalecer todo el cuerpo",
  "te gusta Pilates o Yoga",
  "quieres entrenamientos fáciles de seguir",
  "quieres elegir entre varios tipos de ejercicios",
  "quieres entrenar en tu propio horario",
];

const currencies = {
  BRL: {
    label: "Real brasileño (R$)",
    basic: "R$ 30,00",
    complete: "R$ 60,00",
    discount: "R$ 36,00",
    from: "R$ 30,00",
  },
  USD: {
    label: "Dólar estadounidense (US$)",
    basic: "US$ 5",
    complete: "US$ 10",
    discount: "US$ 6",
    from: "US$ 5",
  },
  MXN: {
    label: "Peso mexicano (MX$)",
    basic: "MX$ 100",
    complete: "MX$ 200",
    discount: "MX$ 120",
    from: "MX$ 100",
  },
  CLP: {
    label: "Peso chileno (CLP$)",
    basic: "CLP$ 5.000",
    complete: "CLP$ 10.000",
    discount: "CLP$ 6.000",
    from: "CLP$ 5.000",
  },
  ARS: {
    label: "Peso argentino (ARS$)",
    basic: "ARS$ 5.400",
    complete: "ARS$ 10.800",
    discount: "ARS$ 6.480",
    from: "ARS$ 5.400",
  },
  COP: {
    label: "Peso colombiano (COP$)",
    basic: "COP$ 21.600",
    complete: "COP$ 43.200",
    discount: "COP$ 25.920",
    from: "COP$ 21.600",
  },
  PEN: {
    label: "Sol peruano (S/)",
    basic: "S/ 18",
    complete: "S/ 36",
    discount: "S/ 22",
    from: "S/ 18",
  },
};

const paymentLinks = {
  basic: {
    card: "https://pay.kiwify.com/Pt9pbZi",
    oxxo: "https://checkout.sellpay.com.br/c/8mst",
    spei: "https://checkout.sellpay.com.br/c/nz5o",
  },
  complete: {
    card: "https://pay.kiwify.com/uGqn0h3",
    oxxo: "https://checkout.sellpay.com.br/c/00vb",
    spei: "https://checkout.sellpay.com.br/c/t1x2",
  },
};

const questions = [
  {
    question: "¿Necesito tener experiencia?",
    answer: "No. Hay ejercicios para quienes están empezando y puedes seguir cada movimiento paso a paso.",
  },
  {
    question: "¿Necesito ir al gimnasio?",
    answer: "No. HomeFit fue creado justamente para que puedas entrenar en casa.",
  },
  {
    question: "¿Necesito comprar equipamiento?",
    answer: "No. Hay diversos entrenamientos que utilizan solamente el peso de tu propio cuerpo.",
  },
  {
    question: "¿Y los ejercicios con bandas elásticas?",
    answer: "Están disponibles dentro del módulo ElasticFit, en el Plan Completo.",
  },
  {
    question: "¿Cómo recibo mi acceso?",
    answer: "Justo después de que se confirme el pago, recibirás acceso a la plataforma.",
  },
  {
    question: "¿Puedo verlo desde el celular?",
    answer: "Sí. Puedes acceder desde el celular, tablet, computadora o TV.",
  },
  {
    question: "¿El pago es mensual?",
    answer: "No. Haces un único pago y recibes tu acceso.",
  },
];

function CheckList({ items, className = "homefit-check-list" }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" size={18} strokeWidth={3} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PlanList({ items }) {
  return (
    <ul className="homefit-plan__list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" size={17} strokeWidth={3} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function UnavailableList({ items }) {
  return (
    <div className="homefit-plan__unavailable">
      <p>No incluye:</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <X aria-hidden="true" size={16} strokeWidth={3} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomeFitSpanishPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(0);
  const [currency, setCurrency] = useState("MXN");
  const selectedCurrency = currencies[currency];
  const slides = [...testimonials, ...testimonials];

  return (
    <main className="homefit-page">
      <TrackingBridge />
      <section className="homefit-hero">
        <div className="page-shell homefit-hero__layout">
          <div className="homefit-hero__copy">
            <img
              className="homefit-hero__logo"
              src="https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e40e17e0-9321-4684-b1db-d62a86dddd1e.jpg"
              alt="Logo Método HomeFit"
            />
            <h1>¡Tu gimnasio completo en casa!</h1>
            <h2>
              Entrenamientos para todo el cuerpo + Pilates + Yoga + Estiramiento +
              Ejercicios con bandas elásticas
            </h2>
            <div className="homefit-hero__mockup homefit-hero__mockup--mobile">
              <img
                src={MOCKUP_URL}
                alt="Plataforma de entrenamientos HomeFit en dispositivos móviles"
              />
            </div>
            <p>
              Entrena <strong>piernas, glúteos, abdomen, brazos y todo el cuerpo</strong>{" "}
              sin tener que salir de casa.
            </p>
            <p>
              Clases paso a paso para que puedas seguirlas desde tu celular, incluso
              si estás empezando ahora.
            </p>
            <CTAButton href={PLANS_ANCHOR}>QUIERO MI ACCESO</CTAButton>
          </div>

          <div className="homefit-hero__mockup homefit-hero__mockup--desktop">
            <img
              src={MOCKUP_URL}
              alt="Plataforma de entrenamientos HomeFit en dispositivos móviles"
            />
          </div>
        </div>
      </section>

      <section className="section homefit-presentation">
        <div className="narrow-shell">
          <div className="section-heading section-heading--center">
            <h2>Mira cómo funciona:</h2>
          </div>
          <div className="homefit-video">
            <iframe
              src="https://play.tynk.ai/p/f4dc169f-9e7f-4272-b88b-39acbee5cfc7"
              title="Video de presentación de HomeFit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="centered-cta">
            <CTAButton href={PLANS_ANCHOR}>QUIERO EMPEZAR AHORA</CTAButton>
          </div>
        </div>
      </section>

      <section className="section homefit-content">
        <div className="page-shell">
          <div className="homefit-copy-block">
            <h2>Todo lo que necesitas para entrenar en casa en un solo lugar</h2>
            <p>
              Al entrar a <strong>HomeFit</strong>, tendrás acceso a una plataforma
              completa de ejercicios para elegir el entrenamiento que quieras hacer ese día.
            </p>
            <h3>Recibes:</h3>
            <CheckList items={platformItems} />
            <p className="homefit-highlight">
              Eliges el entrenamiento, presionas play y comienzas.
            </p>
          </div>

          <div className="homefit-equipment homefit-equipment--single">
            <div className="homefit-copy-block">
              <h2>¿No tienes equipamiento? No hay problema.</h2>
              <p>
                Puedes comenzar usando <strong>solamente el peso de tu propio cuerpo</strong>.
              </p>
              <p>
                Dentro de HomeFit hay diversos ejercicios que no necesitan ningún
                equipamiento.
              </p>
              <p>
                Y, si quieres intensificar tus entrenamientos después, también tendrás
                acceso al módulo especial:
              </p>
              <h2 className="homefit-equipment__title">ElasticFit</h2>
              <p>
                Entrenamientos completos utilizando bandas elásticas para trabajar:
              </p>
              <CheckList
                items={elasticItems}
                className="homefit-check-list homefit-check-list--compact"
              />
              <p>
                Puedes usar las bandas elásticas cuando quieras — pero{" "}
                <strong>no las necesitas para comenzar</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section homefit-goals">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Entrena de acuerdo con tu objetivo</h2>
            <p>No importa si hoy quieres:</p>
          </div>
          <div className="homefit-goals__list">
            {goals.map((goal) => (
              <h3 key={goal}>{goal}</h3>
            ))}
          </div>
          <p className="homefit-goals__closing">
            Dentro de HomeFit simplemente eliges el entrenamiento que deseas hacer ese día.
          </p>
        </div>
      </section>

      <section className="section homefit-community">
        <div className="page-shell">
          <div className="section-heading section-heading--center">
            <h2>Únete a miles de mujeres que eligieron entrenar en casa</h2>
          </div>
        </div>
        <div className="homefit-community__slider" aria-label="Fotos de alumnas entrenando">
          <div className="homefit-community__track">
            {slides.map((photo, index) => (
              <img
                key={`${photo.src}-${index}`}
                src={photo.src}
                alt={index < testimonials.length ? photo.alt : ""}
                aria-hidden={index >= testimonials.length}
              />
            ))}
          </div>
        </div>
        <div className="narrow-content homefit-community__copy">
          <p>Entrenar no tiene por qué significar:</p>
          <ul>
            {obstacles.map((item) => (
              <li key={item}>
                <X aria-hidden="true" size={19} strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Con HomeFit, tu gimnasio está <strong>en tu propia casa</strong>.
          </p>
        </div>
      </section>

      <section className="section homefit-plans" id="homefit-es-planos">
        <div className="page-shell">
          <div className="homefit-currency-selector">
            <label htmlFor="homefit-currency">
              <span>Selecciona tu moneda</span>
              <select
                id="homefit-currency"
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
              >
                {Object.entries(currencies).map(([code, details]) => (
                  <option key={code} value={code}>
                    {details.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="section-heading section-heading--center">
            <h2>Elige tu acceso</h2>
          </div>
          <div className="homefit-plans__grid">
            <article className="homefit-plan">
              <h2>PLAN BÁSICO</h2>
              <h3>Para quienes quieren empezar a entrenar en casa</h3>
              <PlanList items={essentialItems} />
              <UnavailableList items={basicUnavailableItems} />
              <p className="homefit-plan__price">
                POR SOLO <strong>{selectedCurrency.basic}</strong>
              </p>
              <p className="homefit-plan__note">Pago único. Acceso inmediato.</p>
              <CTAButton fullWidth onClick={() => setSelectedPlan("basic")}>
                QUIERO EL PLAN BÁSICO
              </CTAButton>
            </article>

            <article className="homefit-plan homefit-plan--complete">
              <p className="homefit-plan__badge">EL MÁS ELEGIDO</p>
              <h2>PLAN COMPLETO</h2>
              <h3>Tu gimnasio completo en casa</h3>
              <p className="homefit-plan__plus">Todo lo del Plan Básico +</p>
              <PlanList items={completeItems} />
              <p className="homefit-plan__price">
                POR SOLO <strong>{selectedCurrency.complete}</strong>
              </p>
              <p className="homefit-plan__note">Pago único. Acceso inmediato.</p>
              <CTAButton fullWidth onClick={() => setSelectedPlan("complete")}>
                QUIERO EL PLAN COMPLETO
              </CTAButton>
            </article>
          </div>
          <p className="homefit-currency-notice">
            El precio final y la moneda se mostrarán correctamente antes de finalizar la compra.
          </p>
        </div>

        {selectedPlan && (
          <div
            className="discount-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="homefit-es-payment-modal-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedPlan(null);
            }}
          >
            <div className="discount-modal__content">
              <button
                type="button"
                className="discount-modal__close"
                onClick={() => setSelectedPlan(null)}
                aria-label="Cerrar métodos de pago"
              >
                <X aria-hidden="true" size={22} strokeWidth={2.5} />
              </button>
              <p className="discount-modal__eyebrow">ELIGE TU MÉTODO DE PAGO</p>
              <h2 id="homefit-es-payment-modal-title">
                ¿Cómo quieres pagar tu {selectedPlan === "basic" ? "Plan Básico" : "Plan Completo"}?
              </h2>
              <p className="discount-modal__price">
                Selecciona una opción para continuar al pago.
              </p>
              <div className="homefit-payment-options">
                <CTAButton fullWidth href={paymentLinks[selectedPlan].card}>
                  TARJETA DE CRÉDITO
                </CTAButton>
                <CTAButton fullWidth href={paymentLinks[selectedPlan].oxxo}>
                  OXXO
                </CTAButton>
                <CTAButton fullWidth href={paymentLinks[selectedPlan].spei}>
                  SPEI — TRANSFERENCIA BANCARIA
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="section homefit-audience">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>¿Para quién es HomeFit?</h2>
            <p>HomeFit es para ti si:</p>
          </div>
          <CheckList items={audience} className="homefit-audience" />
        </div>
      </section>

      <section className="section homefit-anywhere">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Tu gimnasio siempre estará contigo</h2>
            <h3>Celular • Tablet • Computadora • TV</h3>
          </div>
          <div className="homefit-anywhere__steps">
            <p>Abre la plataforma.</p>
            <p>Elige tu entrenamiento.</p>
            <p>Coloca el celular o la TV frente a ti.</p>
            <p>Y sigue cada ejercicio paso a paso.</p>
          </div>
          <div className="homefit-anywhere__promises">
            <p>Sin horario fijo.</p>
            <p>Sin tener que salir de casa.</p>
            <p>Sin mensualidad de gimnasio.</p>
          </div>
        </div>
      </section>

      <section className="section homefit-start">
        <div className="narrow-content">
          <h2>Puedes comenzar hoy</h2>
          <p>
            Tan pronto como se confirme tu pago, recibirás acceso a HomeFit.
          </p>
          <p>Entra a la plataforma y elige tu primer entrenamiento.</p>
          <h3>Acceso desde {selectedCurrency.from}</h3>
          <p><strong>Pago único.</strong></p>
          <CTAButton href={PLANS_ANCHOR}>QUIERO EMPEZAR AHORA</CTAButton>
        </div>
      </section>

      <section className="section homefit-faq">
        <div className="narrow-content">
          <div className="section-heading section-heading--center">
            <h2>Preguntas frecuentes</h2>
          </div>
          <div className="homefit-faq__list">
            {questions.map((item, index) => {
              const isOpen = index === openQuestion;

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

        <div className="homefit-final">
          <div className="narrow-content">
            <h2>Tu gimnasio completo ahora puede estar dentro de tu casa.</h2>
            <p>
              Entrenamientos para todo el cuerpo, Pilates, Yoga, estiramiento y mucho más.
            </p>
            <p><strong>Elige tu plan y comienza hoy.</strong></p>
            <CTAButton href={PLANS_ANCHOR}>QUIERO EMPEZAR AHORA</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}