import { useState } from "react";
import useReveal from "../hooks/useReveal";
import theme from "../styles/theme";
import { useToast } from "../hooks/useToast";

export default function Newsletter() {
  const toast = useToast();
  const ref   = useReveal();
  const [email, setEmail] = useState("");

  function handleSubscribe() {
    if (!email.includes("@")) {
      toast("Please enter a valid email", "error");
      return;
    }
    toast("🎵 Subscribed! Music updates coming your way.");
    setEmail("");
  }

  return (
    <section id="newsletter" style={{ padding: "80px 40px", background: "#f9f9f9" }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: theme.orange, marginBottom: 10 }}>
          Stay Updated
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 14 }}>
          Be the First to Know<br />About New Records
        </h2>
        <p style={{ fontSize: 15, color: theme.textLight, lineHeight: 1.7, marginBottom: 36 }}>
          Subscribe to our newsletter — get new arrivals, exclusive deals, and Telugu music stories delivered to you.
        </p>

        <div
          className="email-form"
          style={{
            display: "flex",
            background: "#fff",
            border: "1.5px solid #ddd",
            borderRadius: 12,
            overflow: "hidden",
            padding: "6px 6px 6px 20px",
            boxShadow: "0 4px 20px rgba(0,0,0,.06)",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Enter your email address..."
            style={{ border: "none", background: "none", outline: "none", flex: 1, fontSize: 15, fontFamily: "'DM Sans',sans-serif", color: theme.textDark, padding: "10px 0" }}
          />
          <button
            onClick={handleSubscribe}
            style={{ background: theme.orange, color: "#fff", border: "none", padding: "12px 28px", borderRadius: 8, fontSize: 14, fontWeight: 700, transition: "background .2s", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = theme.orangeDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = theme.orange)}
          >
            Subscribe 🎵
          </button>
        </div>

        <small style={{ display: "block", marginTop: 12, fontSize: 12, color: theme.textLight }}>
          No spam. Easy to unsubscribe. Your privacy matters to us.
        </small>
      </div>
    </section>
  );
}
