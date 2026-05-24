const NBSP = " ";

const RollText = ({ text }) => (
  <span className="roll_wrap" aria-hidden="true">
    {[...text].map((char, i) => (
      <span
        key={i}
        className="roll_char"
        style={{ transitionDelay: `${i * 0.018}s` }}
      >
        {char === " " ? NBSP : char}
      </span>
    ))}
  </span>
);

export default RollText;
