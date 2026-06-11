import theme from "../styles/theme";
import { useToast } from "../hooks/useToast";

export default function CartDrawer({ items, total, onClose, onRemove }) {
  const toast = useToast();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,.5)",
          zIndex: 1100,
        }}
      />

      {/* Drawer */}
      <div
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 420,
          height: "100vh",
          background: "#fff",
          zIndex: 1101,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 40px rgba(0,0,0,.15)",
          animation: "slideInRight .35s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Header */}
        <div style={{ padding: "24px", borderBottom: "1px solid rgba(0,0,0,.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20 }}>🛒 Your Cart</h3>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", fontSize: 22, color: theme.textMid, padding: 4 }}
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: theme.textLight }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>💿</div>
              <p style={{ fontSize: 14 }}>
                Your cart is empty.<br />Add some records!
              </p>
            </div>
          ) : (
            items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(0,0,0,.06)",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: 64, height: 64, borderRadius: 8, objectFit: "cover", flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: theme.textLight }}>Vinyl LP Record</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: theme.orange }}>
                    ₹{item.price.toLocaleString()}
                  </div>
                  <button
                    onClick={() => onRemove(i)}
                    style={{ background: "none", border: "none", fontSize: 12, color: "#999", marginTop: 4, cursor: "pointer" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(0,0,0,.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <button
            onClick={() => toast("Checkout coming soon!", "success")}
            style={{
              width: "100%", padding: 14,
              background: theme.orange, color: "#fff",
              border: "none", borderRadius: 12,
              fontSize: 15, fontWeight: 600, transition: "background .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = theme.orangeDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = theme.orange)}
          >
            Checkout →
          </button>
        </div>
      </div>
    </>
  );
}
