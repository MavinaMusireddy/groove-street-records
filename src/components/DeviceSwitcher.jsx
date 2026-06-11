import { useEffect } from "react";
import theme from "../styles/theme";

const MODES = [
  { id: "desktop", label: "🖥️ Desktop" },
  { id: "laptop",  label: "💻 Laptop"  },
  { id: "tablet",  label: "📱 Tablet"  },
  { id: "phone",   label: "📲 Mobile"  },
];

export default function DeviceSwitcher({ mode, setMode }) {
  useEffect(() => {
    document.body.className = mode === "desktop" ? "" : `mode-${mode}`;
  }, [mode]);

  return (
    <div
      style={{
        background: theme.charcoal,
        padding: "8px 0",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        height: theme.devBarH,
      }}
    >
      <span
        style={{
          color: "rgba(255,255,255,.4)",
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Preview:
      </span>

      {MODES.map((m) => (
        <button
          key={m.id}
          onClick={() => setMode(m.id)}
          style={{
            background: mode === m.id ? theme.orange : "none",
            border: `1px solid ${mode === m.id ? theme.orange : "rgba(255,255,255,.25)"}`,
            color: mode === m.id ? "#fff" : "rgba(255,255,255,.7)",
            padding: "5px 14px",
            borderRadius: 20,
            fontSize: 11,
            letterSpacing: "0.05em",
            transition: "all .2s",
          }}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
