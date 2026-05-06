import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollToVehicles = () => {
    const section = document.getElementById("veiculos");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">Experiência digital Ford</span>

        <h1>Compare veículos, analise dados e escolha o Ford ideal.</h1>

        <p>
          Uma plataforma que une comparação automotiva, dados técnicos,
          simulações e benefícios para melhorar a jornada do cliente.
        </p>

        <div className="hero-actions">
          <button className="explore-button" onClick={scrollToVehicles}>
            <span>Explorar veículos</span>
            <small>Ver modelos em destaque</small>
          </button>

          <button
            className="compare-button"
            onClick={() => navigate("/app/compare")}
          >
            <span>Comparar modelos</span>
            <small>Analisar Ford vs concorrentes</small>
          </button>
        </div>
      </div>

      <div className="hero-car-card">
        <span className="card-label">Destaque técnico</span>
        <h2>Ford Ranger Raptor</h2>
        <p>Motor 3.0 V6 Biturbo</p>

        <div className="hero-spec">
          <span>Potência</span>
          <strong>397 cv</strong>
        </div>

        <div className="hero-spec">
          <span>Torque</span>
          <strong>583 Nm</strong>
        </div>

        <div className="hero-spec">
          <span>Tração</span>
          <strong>4x4</strong>
        </div>
      </div>
    </section>
  );
}