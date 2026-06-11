import useReveal from "../hooks/useReveal";
import theme from "../styles/theme";
import { CONTACT_DETAILS } from "../data";
import { useToast } from "../hooks/useToast";

function InputField({ label, type = "text", placeholder }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: theme.textMid, marginBottom: 6 }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{ width: "100%", padding: "12px 16px", border: "1.5px solid rgba(0,0,0,.1)", borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans',sans-serif", outline: "none", background: "#fff" }}
        onFocus={(e) => { e.target.style.borderColor = theme.orange; e.target.style.boxShadow = `0 0 0 3px rgba(200,84,26,.1)`; }}
        onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,.1)"; e.target.style.boxShadow = "none"; }}
      />
    </div>
  );
}

export default function Contact() {
  const toast    = useToast();
  const leftRef  = useReveal();
  const rightRef = useReveal();

  return (
    <section id="contact" style={{ padding: "100px 40px", background: "#fff" }}>
      <div
        className="contact-grid"
        style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}
      >
        {/* Info */}
        <div ref={leftRef} className="reveal-left">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: theme.orange, marginBottom: 10 }}>
            Get in Touch
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 14 }}>
            Talk to Us
          </h2>
          <p style={{ fontSize: 15, color: theme.textLight, lineHeight: 1.8, marginBottom: 32 }}>
            Ask us about any record — our team is always happy to help. We also accept custom orders.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONTACT_DETAILS.map((d) => (
              <div key={d.label} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, background: "rgba(200,84,26,.08)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                  {d.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{d.label}</div>
                  <div style={{ fontSize: 13, color: theme.textLight, lineHeight: 1.5, whiteSpace: "pre-line" }}>{d.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div ref={rightRef} className="reveal-right" style={{ background: "#fff", borderRadius: 20, padding: 40, boxShadow: "0 4px 30px rgba(0,0,0,.08)" }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, marginBottom: 24 }}>Send a Message</h3>

          <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
            <InputField label="Your Name"    placeholder="Full Name"  />
            <InputField label="Phone Number" placeholder="+91 ..."    type="tel" />
          </div>

          <div style={{ marginBottom: 18 }}>
            <InputField label="Email" placeholder="your@email.com" type="email" />
          </div>

          <div style={{ marginBottom: 18 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: theme.textMid, marginBottom: 6 }}>Subject</label>
            <select
              style={{ width: "100%", padding: "12px 16px", border: "1.5px solid rgba(0,0,0,.1)", borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans',sans-serif", outline: "none", background: "#fff" }}
              onFocus={(e) => { e.target.style.borderColor = theme.orange; e.target.style.boxShadow = `0 0 0 3px rgba(200,84,26,.1)`; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,.1)"; e.target.style.boxShadow = "none"; }}
            >
              {["Record Inquiry", "Custom Order", "Shipping Question", "Return / Refund", "Other"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: 18 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: theme.textMid, marginBottom: 6 }}>Message</label>
            <textarea
              placeholder="Write your message here..."
              rows={4}
              style={{ width: "100%", padding: "12px 16px", border: "1.5px solid rgba(0,0,0,.1)", borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans',sans-serif", outline: "none", resize: "vertical", background: "#fff" }}
              onFocus={(e) => { e.target.style.borderColor = theme.orange; e.target.style.boxShadow = `0 0 0 3px rgba(200,84,26,.1)`; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,.1)"; e.target.style.boxShadow = "none"; }}
            />
          </div>

          <button
            onClick={() => toast("✉️ Message sent! We'll reply shortly.")}
            style={{ width: "100%", padding: 14, background: theme.orange, color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 600, transition: "background .2s", marginTop: 8 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = theme.orangeDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = theme.orange)}
          >
            Send Message 🚀
          </button>
        </div>
      </div>
    </section>
  );
}
