import theme from "../styles/theme";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

  return (
    <section
      id="hero"
      style={{
        paddingTop: `calc(${theme.navH}px + ${theme.devBarH}px)`,
        minHeight: "92vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "40px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left — text */}
        <div ref={leftRef} className="reveal-left">
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: theme.textMid,
              marginBottom: 16,
            }}
          >
            VINYL RECORDS &amp; MUSIC STORE
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(36px,4.5vw,64px)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Music that<br />moves your soul
          </h1>

          {/* Address */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, color: theme.textMid, marginBottom: 10 }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            MG Road, Near Benz Circle, Vijayawada, AP 520010
          </div>

          {/* Phone */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, color: theme.textMid, marginBottom: 20 }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <circle cx="12" cy="17" r="1" />
            </svg>
            +91 98765 43210
          </div>

          {/* Hours */}
          <div style={{ fontSize: 14, color: theme.textLight, lineHeight: 1.9, marginBottom: 32 }}>
            Monday – Wednesday &nbsp;&nbsp;10am – 8pm<br />
            Thursday – Saturday &nbsp;&nbsp;&nbsp;10am – 9pm<br />
            Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11am – 6pm
          </div>

          <a
            href="#new-arrivals"
            style={{
              padding: "14px 36px",
              background: "transparent",
              color: theme.textDark,
              border: `2px solid ${theme.textDark}`,
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "inline-block",
              transition: "all .25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = theme.textDark; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = theme.textDark; }}
          >
            VIEW COLLECTION
          </a>
        </div>

        {/* Right — circle image */}
        <div
          ref={rightRef}
          className="reveal-right"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div
            className="hero-circle"
            style={{
              width: "100%",
              maxWidth: 520,
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#f0ebe0",
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=600&q=80"
              alt="Vinyl Records Store"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
