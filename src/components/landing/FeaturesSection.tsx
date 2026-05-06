import { features } from "../../data/features";

export default function FeaturesSection() {
  return (
    <section className="features-section" id="recursos">
      <div className="section-title">
        <span>Recursos</span>
        <h2>O que a plataforma entrega</h2>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}