import useReveal from "../hooks/useReveal";
import theme from "../styles/theme";
import { ABOUT_IMAGES, ABOUT_HIGHLIGHTS } from "../data";

export default function About() {
  const imgRef = useReveal();
  const txtRef = useReveal();

  return (
    <section id="about" style={{ padding: "100px 40px", background: "#fff" }}>
      <div
        className="about-grid"
        style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
      >
        {/* Image grid */}
        <div
          ref={imgRef}
          className="reveal-left about-imgs"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
        >
          {ABOUT_IMAGES.map((src, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "3/4",
                background: "#f0ebe0",
                marginTop: i === 1 ? 40 : i === 3 ? -40 : 0,
              }}
            >
              <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>

        {/* Text */}
        <div ref={txtRef} className="reveal-right">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: theme.orange, marginBottom: 10 }}>
            About Us
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            A Passion for <span style={{ color: theme.orange }}>Music</span> is Our Business
          </h2>

          {[
            "Groove Street Records was founded in 2012 in Vijayawada. Our founder Raghavendra Rao's deep love for Telugu classical music is the soul of this store.",
            "We stock only authentic vinyl records — remastered classics, first pressings, and collector's editions. Every record delivers an experience that streams simply can't replicate.",
            "Our team are music lovers first. Helping you find the right record is our passion.",
          ].map((text, i) => (
            <p key={i} style={{ fontSize: 15, color: theme.textLight, lineHeight: 1.8, marginBottom: 16 }}>
              {text}
            </p>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
            {ABOUT_HIGHLIGHTS.map((h) => (
              <div key={h.value} style={{ background: "#f9f9f9", border: "1px solid #eee", borderRadius: 12, padding: 20 }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: theme.orange, letterSpacing: "0.05em" }}>
                  {h.value}
                </div>
                <div style={{ fontSize: 12, color: theme.textLight, marginTop: 4 }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
