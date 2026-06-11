# 🎵 Groove Street Records — Setup Guide

---

## ✅ Step 1 — Prerequisites (One-time install)

### Install Node.js
Node.js install చేయాలి — npm automatically వస్తుంది.

👉 https://nodejs.org → **"LTS"** version download చేయండి → Install చేయండి

Install అయిందో లేదో check చేయడానికి — Terminal/Command Prompt లో:
```
node --version
npm --version
```
రెండూ version numbers చూపిస్తే ✅ ready.

---

## ✅ Step 2 — Project Download & Extract

1. `groove-street-records.zip` download చేయండి
2. Right-click → **Extract All** (Windows) or double-click (Mac)
3. `groove-street` అనే folder వస్తుంది

---

## ✅ Step 3 — Terminal తెరవడం

**Windows:**
- `groove-street` folder లోకి వెళ్ళండి
- Address bar లో `cmd` type చేసి Enter నొక్కండి
- లేదా: Start Menu → "Command Prompt" search చేయండి, తర్వాత `cd` command తో folder లోకి వెళ్ళండి

**Mac:**
- `groove-street` folder పై Right-click → **"New Terminal at Folder"**
- లేదా: Spotlight (⌘ Space) → "Terminal" → `cd` తో folder లోకి వెళ్ళండి

**VS Code (Recommended):**
- VS Code లో folder open చేయండి
- Terminal → New Terminal (Ctrl+` లేదా ⌃`)

---

## ✅ Step 4 — Dependencies Install

Terminal లో ఈ command run చేయండి:

```bash
npm install
```

> ⏳ First time కొంచెం time పడుతుంది (1–2 minutes).  
> `node_modules` folder create అవుతుంది — ఇది normal.

---

## ✅ Step 5 — Development Server Start

```bash
npm run dev
```

Terminal లో ఇలా చూస్తారు:
```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

👉 Browser లో **http://localhost:5173** open చేయండి — website కనిపిస్తుంది! 🎉

---

## ✅ Step 6 — Stop చేయడం

Terminal లో `Ctrl + C` నొక్కండి.

---

## 🏗️ Production Build (Deploy కి)

```bash
npm run build
```

`dist/` folder create అవుతుంది — ఇది Netlify, Vercel, లేదా ఏ hosting లోనైనా upload చేయవచ్చు.

Build preview చూడటానికి:
```bash
npm run preview
```

---

## 🌐 Free Hosting — Netlify (Optional)

1. https://netlify.com → Sign up (free)
2. `npm run build` run చేయండి
3. `dist` folder ని Netlify dashboard లో drag & drop చేయండి
4. Live URL వస్తుంది! ✅

---

## 📁 Project Structure (Quick Reference)

```
groove-street/
├── index.html              ← HTML entry point
├── package.json            ← project config & scripts
├── vite.config.js          ← build tool config
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Root component
    ├── styles/
    │   ├── theme.js        ← Colors, fonts (edit చేయండి)
    │   └── GlobalStyle.jsx ← Global CSS
    ├── data/
    │   └── index.js        ← Products, nav, categories (edit చేయండి)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── SearchSection.jsx
        ├── Categories.jsx
        ├── ProductCard.jsx
        ├── ProductGrid.jsx
        ├── CartDrawer.jsx
        ├── Promo.jsx
        ├── About.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        ├── Newsletter.jsx
        ├── Footer.jsx
        ├── DeviceSwitcher.jsx
        └── SectionHeader.jsx
```

---

## ✏️ Common Changes

| మీరు చేయాలనుకున్నది | ఏ file edit చేయాలి |
|---|---|
| Products మార్చాలి | `src/data/index.js` |
| Colors మార్చాలి | `src/styles/theme.js` |
| Hero text మార్చాలి | `src/components/Hero.jsx` |
| Nav links మార్చాలి | `src/data/index.js` → `NAV_ITEMS` |
| Footer info మార్చాలి | `src/data/index.js` → `FOOTER_COLS` |

---

## ❗ Common Errors & Fixes

| Error | Fix |
|---|---|
| `npm: command not found` | Node.js install చేయండి (Step 1) |
| `Port 5173 already in use` | `npm run dev -- --port 3000` use చేయండి |
| `Module not found` | `npm install` మళ్ళీ run చేయండి |
| White screen in browser | Terminal లో error చూడండి, `npm install` try చేయండి |

---

## 💡 Recommended Tools

- **VS Code** — https://code.visualstudio.com (free code editor)
- **VS Code Extension:** "ES7+ React/Redux/React-Native snippets"
- **Browser:** Chrome or Edge (DevTools బాగుంటాయి)

---

*Built with React + Vite ⚡*
