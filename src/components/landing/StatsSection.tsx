import { stats } from "../../data/stats";

export default function StatsSection() {
  return (
    <section className="stats-section" id="dados">
      {stats.map((item) => (
        <div className="stat-card" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}