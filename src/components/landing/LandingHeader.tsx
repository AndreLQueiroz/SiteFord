import { useNavigate } from "react-router-dom";

export default function LandingHeader() {
  const navigate = useNavigate();

  return (
    <header className="landing-header">
      <div className="landing-logo">NextDrive Ford</div>

      <nav className="landing-nav">
        <a href="#sobre">Sobre</a>
        <a href="#dados">Dados</a>
        <a href="#recursos">Recursos</a>

        <button
          className="login-button"
          onClick={() => navigate("/app/register")}
        >
          Entrar
        </button>
      </nav>
    </header>
  );
}