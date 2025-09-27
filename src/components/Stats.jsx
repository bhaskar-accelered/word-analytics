import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Stats({ text }) {
  const countWords = () => {
    let words = text.trim().split(/\s+/);
    if (words[0] === "") return 0;
    return words.length;
  };
  return (
    <section className="stats">
      <Stat number={countWords()} label="Words" />
      <Stat number={text.length} label="Characters" />
      <Stat number={INSTAGRAM_MAX_CHARACTERS - text.length} label="Instagram" />
      <Stat number={FACEBOOK_MAX_CHARACTERS - text.length} label="Facebook" />
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
