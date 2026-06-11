import useReveal from "../hooks/useReveal";
import { CATEGORIES } from "../data";
import SectionHeader from "./SectionHeader";
import theme from "../styles/theme";

function CategoryCard({ cat, index }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal cat-card"
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "3/4",
        transition: "transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s",
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,.2)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
      onClick={() => document.getElementById("new-arrivals")?.scrollIntoView({ behavior: "smooth" })}
    >
      <div className="cat-bg" style={{ position: "absolute", inset: 0, background: cat.bg }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.85) 0%,rgba(0,0,0,.2) 60%,transparent 100%)" }} />

      {cat.badge && (
        <div style={{
          position: "absolute", top: 14, left: 14,
          background: theme.orange, color: "#fff",
          fontSize: 10, fontWeight: 700, padding: "4px 10px",
          borderRadius: 20, letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          {cat.badge}
        </div>
      )}

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.icon}</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, color: "#fff", fontWeight: 700, marginBottom: 4 }}>{cat.title}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>{cat.count}</div>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section id="categories" style={{ padding: "80px 40px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          label="Browse by Genre"
          title={`Choose Your <span style="color:${theme.orange}">Genre</span>`}
          desc="From Telugu Classical to Modern Fusion — all in one place"
        />
        <div className="cats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
