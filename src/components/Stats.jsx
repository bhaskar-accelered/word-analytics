export default function Stats({ counts }) {
  return (
    <section className="stats">
      <Stat number={counts.words} label="Words" />
      <Stat number={counts.length} label="Characters" />
      <Stat number={counts.instagram} label="Instagram" />
      <Stat number={counts.facebook} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <span className="stat__label">{label}</span>
    </section>
  );
}
