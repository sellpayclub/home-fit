export const testimonials = [
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/8cedd650-6266-4737-b930-64e86264794d.jpg", alt: "Aluna treinando em casa com faixa elástica amarela" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1889df1c-696c-463a-9cc6-1f2d5dc18801.jpg", alt: "Aluna treinando sentada com faixa elástica azul" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/5f37dcaa-227c-44d4-9c7a-2e7fc3973ffc.jpg", alt: "Aluna fazendo exercício em casa com faixa elástica vermelha" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/3daf8ed4-a2a8-432c-aea1-ad83fdc970bb.jpg", alt: "Aluna sorrindo enquanto treina com faixas elásticas" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/c8d4bbc6-aa92-4827-b2d3-53fa7046f2e4.jpg", alt: "Aluna treinando ao ar livre com faixa elástica preta" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1295d478-7b70-434b-a9ea-d73fe4a24cfb.jpg", alt: "Aluna fazendo exercício de braços com faixa elástica vermelha" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d67ae600-82ab-455b-b556-c7e127c96b15.jpg", alt: "Aluna fazendo agachamento com faixa elástica azul" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/66b8aa81-0569-408d-8738-d19817c41118.jpg", alt: "Aluna fazendo exercício de ponte com faixa elástica amarela" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/ed6df546-3aff-4ea6-812c-e2700df7f1a3.jpg", alt: "Aluna fazendo agachamento com faixa elástica verde" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/1500ecd8-cf5a-4711-a843-26e0806dbf56.jpg", alt: "Aluna treinando no colchonete com faixa elástica vermelha" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/623a7964-694c-404d-9dba-4a4ad03bdf26.jpg", alt: "Aluna acompanhando o treino pelo celular" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/402c32f9-3901-4c2a-81f4-af0c2856f646.jpg", alt: "Aluna treinando com elásticos e plataforma Método ElasticFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/d8737e84-6da9-4f66-9a25-e40d0787d48e.jpg", alt: "Aluna sorrindo enquanto mostra a plataforma Método ElasticFit e uma faixa elástica verde" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/c9e42f0a-1474-480e-b70f-272864e1d303.jpg", alt: "Aluna fazendo exercício de braços com faixa elástica roxa e celular com a plataforma" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/bd0d2726-5c17-4298-9543-c6c10791a2b6.jpg", alt: "Aluna treinando com elásticos laranja ao lado do celular com a plataforma Método ElasticFit" },
  { src: "https://osnxfompwlwlfkuvncgs.supabase.co/storage/v1/object/public/project-assets/3464e6e8-17aa-481a-a30b-c7fdbac62d82/uploads/38b54606-1810-412d-857f-f5253bde0787.jpg", alt: "Aluna fazendo exercício no colchonete com faixa elástica rosa e celular com a plataforma" },
];

export default function TestimonialsSection() {
  const slides = [...testimonials, ...testimonials];

  return (
    <section className="section testimonials-section">
      <div className="page-shell">
        <div className="section-heading section-heading--center">
          <h2>Junte-se + de 12 mil alunas que treinam todos os dias juntas em casa:</h2>
        </div>
      </div>

      <div className="testimonials-slider" aria-label="Fotos das alunas treinando em casa">
        <div className="testimonials-slider__track">
          {slides.map((testimonial, index) => (
            <div
              className="testimonials-slider__slide"
              key={`${testimonial.src}-${index}`}
              aria-hidden={index >= testimonials.length}
            >
              <img src={testimonial.src} alt={index < testimonials.length ? testimonial.alt : ""} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}