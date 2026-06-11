import useReveal from "../hooks/useReveal";
import theme from "../styles/theme";
import { TESTIMONIALS } from "../data";
import SectionHeader from "./SectionHeader";

function TestiCard({ testi, delay }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 28,
        boxShadow: "0 2px 16px rgba(0,0,0,.06)",
        transition: "transform .3s, box-shadow .3s",
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,.06)"; }}
    >
      <div style={{ fontSize: 36, color: theme.orange, lineHeight: 1, marginBottom: 14 }}>"</div>
      <p style={{ fontSize: 14, color: theme.textMid, lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>
        {testi.text}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: testi.color, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 14, flexShrink: 0,
        }}>
          {testi.initials}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{testi.name}</div>
          <div style={{ fontSize: 12, color: theme.textLight }}>⭐⭐⭐⭐⭐ · {testi.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "80px 40px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          label="Customer Reviews"
          title={`What They <span style="color:${theme.orange}">Say</span>`}
        />
        <div
          className="testi-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <TestiCard key={t.name} testi={t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
