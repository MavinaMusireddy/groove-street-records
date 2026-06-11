import theme from "../styles/theme";
import { FOOTER_COLS } from "../data";
import { useToast } from "../hooks/useToast";

const SOCIAL = ["📷", "📘", "▶️", "💬"];

export default function Footer() {
  const toast = useToast();

  return (
    <footer style={{ background: theme.charcoal, padding: "70px 40px 30px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Grid */}
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,.08)" }}
        >
          {/* Brand */}
          <div>
            <a
              href="#hero"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: theme.orange, letterSpacing: "0.05em", display: "block", marginBottom: 16 }}
            >
              Groove<span style={{ color: theme.olive }}>Street</span>
            </a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.7, maxWidth: 260 }}>
              With love for Telugu music — delivering the finest vinyl records since 2012.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {SOCIAL.map((icon) => (
                <button
                  key={icon}
                  onClick={() => toast(`${icon} Opening...`)}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, color: "rgba(255,255,255,.6)", transition: "all .2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = theme.orange; e.currentTarget.style.borderColor = theme.orange; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "rgba(255,255,255,.6)"; }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h5 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.8)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                {col.title}
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: 13, color: "rgba(255,255,255,.45)", transition: "color .2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = theme.orange)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.45)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
            © 2025 Groove Street Records, Vijayawada. Made with ♥ for Telugu Music Lovers.
          </p>
          <p style={{ fontSize: 12 }}>
            <a href="#contact" style={{ color: theme.orange }}>Privacy Policy</a>
            <span style={{ color: "rgba(255,255,255,.2)", margin: "0 6px" }}>·</span>
            <a href="#contact" style={{ color: theme.orange }}>Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
