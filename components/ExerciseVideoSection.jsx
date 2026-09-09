export default function ExerciseVideoSection() {
  return (
    <section className="exercise-video-section">
      <div className="page-shell narrow-shell">
        <div className="section-heading section-heading--center">
          <h2>Exercícios Sem Elásticos Liberado até seu kit chegarem:</h2>
        </div>

        <div className="exercise-video-frame">
          <iframe
            src="https://play.tynk.ai/p/d7785311-0121-482c-82ac-d8a38cb6e6c3"
            title="Exercícios em casa"
            style={{ width: "100%", aspectRatio: "9 / 16", border: 0, display: "block" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}