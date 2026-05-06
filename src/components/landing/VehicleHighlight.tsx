import { vehicles } from "../../data/vehicles";

export default function VehicleHighlight() {
  const vehicle = vehicles[0];

  return (
    <section className="vehicle-highlight" id="veiculos">
      <div>
        <span className="section-badge">Dados técnicos</span>
        <h2>{vehicle.name}</h2>
        <p>{vehicle.highlight}</p>
      </div>

      <div className="vehicle-data-grid">
        <div>
          <span>Motor</span>
          <strong>{vehicle.engine}</strong>
        </div>

        <div>
          <span>Potência</span>
          <strong>{vehicle.power} cv</strong>
        </div>

        <div>
          <span>Torque</span>
          <strong>{vehicle.torque} Nm</strong>
        </div>

        <div>
          <span>Uso ideal</span>
          <strong>{vehicle.idealUse}</strong>
        </div>
      </div>
    </section>
  );
}