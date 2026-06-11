import { useState } from "react";
import theme from "../styles/theme";
import { SEARCH_TAGS } from "../data";
import { useToast } from "../hooks/useToast";

export default function SearchSection() {
  const toast = useToast();
  const [query, setQuery] = useState("");

  function handleSearch(q) {
    const term = q ?? query;
    if (term.trim()) toast(`🔍 Searching "${term}"...`);
    else toast("Please enter a search term", "error");
  }

  function handleTagClick(tag) {
    setQuery(tag);
    toast(`🔍 Searching "${tag}"...`);
  }

  return (
    <section id="search-section" style={{ background: "#f9f9f9", padding: "40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, marginBottom: 6 }}>
          Find Your Favourite Record
        </h2>
        <p style={{ color: theme.textLight, fontSize: 14, marginBottom: 20 }}>
          Search across 5,000+ vinyl records in our collection
        </p>

        <div
          style={{
            display: "flex",
            background: "#fff",
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,.08)",
            border: "1.5px solid #eee",
          }}
        >
          <select
            style={{
              border: "none",
              outline: "none",
              padding: "16px 20px",
              fontSize: 14,
              background: "#fff",
              color: theme.textDark,
              borderRight: "1px solid #eee",
              minWidth: 160,
            }}
          >
            {["All Categories", "Telugu Film", "Carnatic", "Bollywood", "Jazz", "Accessories"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Artist, film, raga, song title..."
            style={{
              border: "none",
              outline: "none",
              padding: "16px 20px",
              fontSize: 15,
              flex: 1,
              fontFamily: "'DM Sans',sans-serif",
            }}
          />

          <button
            onClick={() => handleSearch()}
            style={{
              background: theme.orange,
              color: "#fff",
              border: "none",
              padding: "16px 32px",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.05em",
              transition: "background .2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = theme.orangeDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = theme.orange)}
          >
            🔍 Search
          </button>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          {SEARCH_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              style={{
                background: "#fff",
                color: theme.textMid,
                border: "1px solid #ddd",
                padding: "5px 14px",
                borderRadius: 20,
                fontSize: 12,
                transition: "all .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = theme.orange; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = theme.orange; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = theme.textMid; e.currentTarget.style.borderColor = "#ddd"; }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
