import { useState, useEffect } from "react";
import theme from "../styles/theme";
import { NAV_ITEMS } from "../data";
import { useToast } from "../hooks/useToast";

function DropdownMenu({ items }) {
  return (
    <div
      className="dropdown"
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: 0,
        minWidth: 220,
        background: "#fff",
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0,0,0,.12)",
        padding: 8,
        opacity: 0,
        visibility: "hidden",
        transform: "translateY(-8px)",
        transition: "all .22s ease",
        zIndex: 10,
      }}
    >
      {items.map((item, i) =>
        item.divider ? (
          <div key={i} style={{ height: 1, background: "rgba(0,0,0,.07)", margin: "6px 8px" }} />
        ) : (
          <a
            key={i}
            href={item.href}
            style={{
              display: "block",
              padding: "9px 14px",
              fontSize: 13,
              color: item.highlight ? theme.orange : theme.textMid,
              fontWeight: item.highlight ? 600 : 400,
              borderRadius: 8,
              transition: "all .15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(200,84,26,.08)"; e.currentTarget.style.color = theme.orange; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = item.highlight ? theme.orange : theme.textMid; }}
          >
            {item.label}
          </a>
        )
      )}
    </div>
  );
}

function MobileMenu({ onClose }) {
  const [expanded, setExpanded] = useState(null);

  function toggle(label) {
    setExpanded((prev) => (prev === label ? null : label));
  }

  return (
    <div
      style={{
        position: "fixed",
        top: theme.devBarH + theme.navH,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#fff",
        zIndex: 999,
        overflowY: "auto",
        animation: "slideInLeft .35s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{ padding: 24 }}>
        {/* Mobile search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f4f4f4",
            borderRadius: 30,
            padding: "8px 16px",
            marginBottom: 20,
          }}
        >
          <input
            placeholder="Search records..."
            style={{ border: "none", background: "none", outline: "none", flex: 1, fontSize: 14, fontFamily: "'DM Sans',sans-serif" }}
          />
          <span>🔍</span>
        </div>

        {NAV_ITEMS.map((item) => (
          <div key={item.label} style={{ borderBottom: "1px solid rgba(0,0,0,.06)" }}>
            <div
              onClick={() => item.sub ? toggle(item.label) : onClose()}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 8px", fontSize: 16, fontWeight: 500, cursor: "pointer" }}
            >
              {item.sub ? item.label : <a href={item.href} onClick={onClose} style={{ color: "inherit" }}>{item.label}</a>}
              {item.sub && (
                <span
                  style={{
                    fontSize: 12,
                    color: theme.textLight,
                    display: "inline-block",
                    transition: "transform .2s",
                    transform: expanded === item.label ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  ▾
                </span>
              )}
            </div>

            {item.sub && expanded === item.label && (
              <div style={{ padding: "0 0 12px 16px" }}>
                {item.sub.map((s, i) =>
                  s.divider ? null : (
                    <a
                      key={i}
                      href={s.href}
                      onClick={onClose}
                      style={{
                        display: "block",
                        padding: "10px 8px",
                        fontSize: 14,
                        color: s.highlight ? theme.orange : theme.textMid,
                        borderRadius: 6,
                        fontWeight: s.highlight ? 600 : 400,
                      }}
                    >
                      {s.label}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Navbar({ cartCount, onCartOpen }) {
  const toast = useToast();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchQ, setSearchQ]       = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleSearch() {
    if (searchQ.trim()) toast(`🔍 Searching "${searchQ}"...`);
  }

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: theme.devBarH,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "#fff",
          borderBottom: "1px solid rgba(0,0,0,.08)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,.12)" : "none",
          transition: "box-shadow .3s",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 40px",
            height: theme.navH,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          {/* Hamburger */}
          <button
            className={menuOpen ? "ham-open" : ""}
            onClick={() => setMenuOpen((o) => !o)}
            style={{ background: "none", border: "none", padding: 8, borderRadius: 6, display: "flex", flexDirection: "column", gap: 5 }}
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>

          {/* Logo */}
          <a
            href="#hero"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: theme.orange, letterSpacing: "0.05em", flexShrink: 0 }}
          >
            Groove<span style={{ color: theme.olive }}>Street</span>
          </a>

          {/* Desktop nav links */}
          <ul className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none", flex: 1, justifyContent: "center" }}>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="nav-item"
                style={{ position: "relative" }}
                onMouseEnter={(e) => {
                  const dd = e.currentTarget.querySelector(".dropdown");
                  if (dd) { dd.style.opacity = "1"; dd.style.visibility = "visible"; dd.style.transform = "translateY(0)"; }
                }}
                onMouseLeave={(e) => {
                  const dd = e.currentTarget.querySelector(".dropdown");
                  if (dd) { dd.style.opacity = "0"; dd.style.visibility = "hidden"; dd.style.transform = "translateY(-8px)"; }
                }}
              >
                <a
                  href={item.href}
                  style={{ display: "flex", alignItems: "center", padding: "8px 12px", fontSize: 13.5, fontWeight: 500, color: theme.textMid, borderRadius: 6, transition: "all .2s", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = theme.orange; e.currentTarget.style.background = "rgba(200,84,26,.07)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = theme.textMid; e.currentTarget.style.background = "none"; }}
                >
                  {item.label}
                  {item.sub && <span className="caret" />}
                </a>
                {item.sub && <DropdownMenu items={item.sub} />}
              </li>
            ))}
          </ul>

          {/* Search */}
          <div
            className="nav-search"
            style={{ display: "flex", alignItems: "center", background: "#f4f4f4", border: "1.5px solid transparent", borderRadius: 30, padding: "7px 14px", width: 220, flexShrink: 0, transition: "all .25s" }}
            onFocus={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = theme.orange; e.currentTarget.style.boxShadow = `0 0 0 3px rgba(200,84,26,.1)`; }}
            onBlur={(e) => { e.currentTarget.style.background = "#f4f4f4"; e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <input
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Artist, album, genre..."
              style={{ border: "none", background: "none", outline: "none", fontSize: 13, fontFamily: "'DM Sans',sans-serif", color: theme.textDark, width: "100%" }}
            />
            <button
              onClick={handleSearch}
              style={{ background: "none", border: "none", color: theme.textLight, fontSize: 15, lineHeight: 1 }}
            >
              🔍
            </button>
          </div>

          {/* Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => toast("Wishlist coming soon!")}
              style={{ background: "none", border: "none", padding: 8, borderRadius: 8, color: theme.textMid, fontSize: 18, transition: "all .2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.orange; e.currentTarget.style.background = "rgba(200,84,26,.07)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.textMid; e.currentTarget.style.background = "none"; }}
            >
              ♡
            </button>
            <button
              onClick={onCartOpen}
              style={{ background: "none", border: "none", padding: 8, borderRadius: 8, color: theme.textMid, fontSize: 18, position: "relative", transition: "all .2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.orange; e.currentTarget.style.background = "rgba(200,84,26,.07)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.textMid; e.currentTarget.style.background = "none"; }}
            >
              🛒
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute", top: 2, right: 2,
                    background: theme.orange, color: "#fff",
                    fontSize: 9, fontWeight: 700,
                    width: 16, height: 16, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
