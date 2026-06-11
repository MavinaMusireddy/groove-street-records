import useReveal from "../hooks/useReveal";
import theme from "../styles/theme";

const PROMOS = [
  {
    cls: "reveal-left",
    bg: `linear-gradient(135deg,${theme.charcoal} 0%,${theme.oliveDark} 100%)`,
    deco: "🎵",
    title: "Collector's Edition\nVinyl Bundle",
    desc: "5 Telugu Classic Records + Premium Storage Box — Limited Stock!",
    href: "#bestsellers",
    btn: "View Bundle →",
  },
  {
    cls: "reveal-right",
    bg: `linear-gradient(135deg,${theme.orangeDark} 0%,${theme.orangeLight} 100%)`,
    deco: "💿",
    title: "Free Shipping\nOn Orders ₹999+",
    desc: "Secure packaging and fast delivery on all orders across India",
    href: "#new-arrivals",
    btn: "Shop Now →",
  },
];

function PromoCard({ promo }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={promo.cls}
      style={{
        background: promo.bg,
        borderRadius: 20,
        padding: "48px 40px",
        position: "relative",
        overflow: "hidden",
        minHeight: 240,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", fontSize: 120, opacity: 0.08, pointerEvents: "none" }}>
        {promo.deco}
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 24, color: "#fff", fontWeight: 900,
          marginBottom: 8, lineHeight: 1.2, whiteSpace: "pre-line",
        }}
      >
        {promo.title}
      </h3>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", marginBottom: 20 }}>{promo.desc}</p>
      <a
        href={promo.href}
        style={{
          display: "inline-block", background: "#fff", color: theme.charcoal,
          padding: "10px 24px", borderRadius: 30, fontSize: 13, fontWeight: 700,
          transition: "all .2s", alignSelf: "flex-start",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
      >
        {promo.btn}
      </a>
    </div>
  );
}

export default function Promo() {
  return (
    <section id="promo" style={{ padding: "0 40px 80px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="promo-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {PROMOS.map((p) => (
            <PromoCard key={p.deco} promo={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
