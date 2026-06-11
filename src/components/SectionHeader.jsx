import useReveal from "../hooks/useReveal";
import theme from "../styles/theme";

export default function SectionHeader({ label, title, desc, center = true }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ textAlign: center ? "center" : "left", marginBottom: 50 }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: theme.orange,
          marginBottom: 10,
        }}
      >
        {label}
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "clamp(26px,3vw,40px)",
          fontWeight: 900,
          lineHeight: 1.15,
          marginBottom: desc ? 14 : 0,
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {desc && (
        <p
          style={{
            fontSize: 15,
            color: theme.textLight,
            maxWidth: 520,
            margin: center ? "0 auto" : 0,
            lineHeight: 1.7,
          }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
