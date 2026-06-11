import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { useToast } from "../hooks/useToast";
import theme from "../styles/theme";

const BADGE_COLORS = {
  "New":     theme.olive,
  "Sale":    "#e74c3c",
  "Hot 🔥":  theme.orange,
  "Best #1": theme.orange,
  "Best #2": theme.orange,
};

export default function ProductCard({ product, onAdd, delay = 0 }) {
  const ref   = useReveal();
  const toast = useToast();
  const [wished, setWished] = useState(false);

  function handleWishlist(e) {
    e.stopPropagation();
    setWished((w) => !w);
    toast(wished ? "Removed from wishlist" : "♥ Added to wishlist!");
  }

  function handleAdd(e) {
    e.stopPropagation();
    onAdd(product);
  }

  return (
    <div
      ref={ref}
      className="reveal prod-card"
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,.06)",
        transition: "all .35s cubic-bezier(.4,0,.2,1)",
        cursor: "pointer",
        position: "relative",
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.14)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,.06)"; }}
    >
      {/* Image */}
      <div className="prod-img" style={{ width: "100%", aspectRatio: "1", background: "#f0ebe0", position: "relative", overflow: "hidden" }}>
        <img src={product.img} alt={product.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

        {product.badge && (
          <span style={{
            position: "absolute", top: 12, left: 12,
            fontSize: 10, fontWeight: 700, padding: "4px 10px",
            borderRadius: 20, letterSpacing: "0.08em", textTransform: "uppercase",
            background: BADGE_COLORS[product.badge] ?? theme.orange,
            color: "#fff",
          }}>
            {product.badge}
          </span>
        )}

        <button
          className="prod-wishlist"
          onClick={handleWishlist}
          style={{
            position: "absolute", top: 12, right: 12,
            background: "#fff", border: "none",
            width: 34, height: 34, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 15, boxShadow: "0 2px 8px rgba(0,0,0,.12)",
            color: wished ? theme.orange : "inherit", transition: "all .2s",
          }}
        >
          {wished ? "♥" : "♡"}
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: theme.olive, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
          {product.genre}
        </div>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>
          {product.title}
        </h3>
        <p style={{ fontSize: 12, color: theme.textLight, marginBottom: 8 }}>{product.artist}</p>

        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: theme.textLight, marginBottom: 10 }}>
          <span style={{ color: "#f59e0b" }}>{"★".repeat(Math.floor(product.rating))}</span>
          ({product.rating})
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: theme.orange }}>
            ₹{product.price.toLocaleString()}
            {product.oldPrice && (
              <span style={{ fontSize: 12, fontWeight: 400, color: theme.textLight, textDecoration: "line-through", marginLeft: 5 }}>
                ₹{product.oldPrice.toLocaleString()}
              </span>
            )}
          </span>

          <button
            onClick={handleAdd}
            style={{
              background: theme.charcoal, color: "#fff", border: "none",
              padding: "8px 16px", borderRadius: 25,
              fontSize: 12, fontWeight: 600, transition: "all .2s", whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = theme.orange; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = theme.charcoal; e.currentTarget.style.transform = "scale(1)"; }}
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
}
