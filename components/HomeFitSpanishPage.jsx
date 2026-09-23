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
  "Videos que muestran cada movimiento paso a paso",
  "Acceso desde el celular, computadora, tablet o TV",
];

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

const completeItems = [
  "Entrenamientos en casa sin equipamiento",
  "Piernas y glúteos",
  "Abdomen",
  "Brazos y espalda",
  "Todo el cuerpo",
  "Movilidad y estiramiento",
  "Pilates en casa",
  "Yoga",
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
    complete: "R$ 60,00",
  },
  USD: {
    label: "Dólar estadounidense (US$)",
    complete: "US$ 10",
  },
  MXN: {
    label: "Peso mexicano (MX$)",
    complete: "MX$ 200",
  },
  CLP: {
    label: "Peso chileno (CLP$)",
    complete: "CLP$ 10.000",
  },
  ARS: {
    label: "Peso argentino (ARS$)",
    complete: "ARS$ 10.800",
  },
  COP: {
    label: "Peso colombiano (COP$)",
    complete: "COP$ 43.200",
  },
  PEN: {
    label: "Sol peruano (S/)",
    complete: "S/ 36",
  },
};


const results = [
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/097bebb5-8767-4fdd-b329-478465a05091.jpg",
    alt: "Resultado de alumna HomeFit con comparación de antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/af488165-d16c-4b75-a6be-a34f8dd2fb2e.jpg",
    alt: "Resultado de alumna HomeFit con comparación de antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d4f8947b-6666-4de4-aa9c-1f67a7c1c261.jpg",
    alt: "Resultado de alumna HomeFit con comparación de antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/0ff7220f-4423-43f0-b87a-24762a91bb63.jpg",
    alt: "Resultado de alumna HomeFit",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1c2dc9cd-4396-4d26-8229-07ed857e1073.jpg",
    alt: "Resultado de alumna HomeFit con comparación de antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/256adba1-10c1-4753-8122-6182ee763de6.jpg",
    alt: "Resultado de alumna HomeFit",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/7e359f3a-2901-4850-be1a-5b341d28d3b5.jpg",
    alt: "Resultado de alumna HomeFit con comparación lateral de antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/acdb37e5-3c45-4f1a-a941-fad46128f0c6.jpg",
    alt: "Resultado de alumna HomeFit con transformación corporal",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/273afd66-2be3-4727-bb11-22497d3e6439.jpg",
    alt: "Resultado de alumna HomeFit en el desafío de 30 días",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a38aad9f-d3e5-4744-857b-793bbb64b4b2.jpg",
    alt: "Resultado de alumna HomeFit con antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d03065bb-64e4-4382-af6c-793c3a5bcb69.jpg",
    alt: "Resultado de alumna HomeFit con transformación de antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/6ea1bb4b-221f-406e-ad8e-1df570feb1b3.jpg",
    alt: "Resultado de alumna HomeFit con cambio corporal",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b7ad15c7-c63a-4ca1-92b1-051ec744dcb0.jpg",
    alt: "Resultado de alumna HomeFit",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/b944f3d3-f938-4bfa-8e35-09c63d915ee5.jpg",
    alt: "Resultado de alumna HomeFit después de dos meses",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/a6a180f3-1486-4b71-810a-b059f546a4ad.jpg",
    alt: "Resultado de alumna HomeFit con comparación de antes y después",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/c5684ce6-9da4-478b-810d-8599801e8a6d.png",
    alt: "Resultado de alumna HomeFit",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/09c9656a-853e-4d62-b1b5-edd249f4e270.jpg",
    alt: "Resultado de alumna HomeFit",
  },
  {
    src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/e99c3890-bc93-4125-b801-3d9e7a3f4b1b.jpg",
    alt: "Resultado de alumna HomeFit con comparación de antes y después",
  },
];

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

export default function HomeFitSpanishPage() {
  const [openQuestion, setOpenQuestion] = useState(0);
  const [currency, setCurrency] = useState("MXN");
  const selectedCurrency = currencies[currency];
  const slides = [...testimonials, ...testimonials];
  const resultSlides = [...results, ...results];

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
              Entrenamientos para todo el cuerpo + Pilates + Yoga + Estiramiento
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

        <div
          className="homefit-community__slider homefit-results-carousel"
          aria-label="Resultados de las alumnas HomeFit"
        >
          <div className="homefit-community__track">
            {resultSlides.map((result, index) => (
              <img
                key={`${result.src}-${index}`}
                src={result.src}
                alt={index < results.length ? result.alt : ""}
                aria-hidden={index >= results.length}
              />
            ))}
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
          <div className="homefit-plans__grid homefit-plans__grid--single">
            <article className="homefit-plan homefit-plan--complete homefit-plan--single">
              <p className="homefit-plan__badge">ACCESO COMPLETO</p>
              <h2>PLAN ÚNICO</h2>
              <h3>Tu gimnasio completo en casa</h3>
              <PlanList items={completeItems} />
              <p className="homefit-plan__price">
                POR SOLO <strong>{selectedCurrency.complete}</strong>
              </p>
              <p className="homefit-plan__note">Pago único. Acceso inmediato.</p>
              <CTAButton fullWidth href="https://checkout.sellpay.com.br/c/k905">
                QUIERO MI ACCESO COMPLETO
              </CTAButton>
            </article>
          </div>
          <p className="homefit-currency-notice">
            El precio final y la moneda se mostrarán correctamente antes de finalizar la compra.
          </p>
        </div>


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
          <h3>Acceso por {selectedCurrency.complete}</h3>
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