import { createContext, useContext, useState, useEffect } from "react";
import theme from "../styles/theme";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  function showToast(msg, type = "success") {
    setToast({ msg, type, id: Date.now() });
  }

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <div
          key={toast.id}
          style={{
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            background: theme.charcoal,
            color: "#fff",
            padding: "12px 24px",
            borderRadius: 50,
            fontSize: 14,
            fontWeight: 500,
            zIndex: 9999,
            boxShadow: "0 8px 30px rgba(0,0,0,.3)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
            borderLeft: `4px solid ${toast.type === "error" ? theme.orange : theme.oliveLight}`,
            animation: "toastIn .35s cubic-bezier(.34,1.56,.64,1)",
          }}
        >
          {toast.msg}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
