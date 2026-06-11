import theme from "./theme";

export default function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { font-family: 'DM Sans', sans-serif; background: #fff; color: ${theme.textDark}; overflow-x: hidden; }
      a { text-decoration: none; color: inherit; }
      button { cursor: pointer; font-family: 'DM Sans', sans-serif; }

      :root {
        --orange: ${theme.orange};
        --orange-dark: ${theme.orangeDark};
        --olive: ${theme.olive};
        --charcoal: ${theme.charcoal};
        --nav-h: ${theme.navH}px;
        --dev-bar-h: ${theme.devBarH}px;
      }

      /* Scroll reveal */
      .reveal       { opacity: 0; transform: translateY(28px);  transition: opacity .6s ease, transform .6s ease; }
      .reveal.in    { opacity: 1; transform: translateY(0); }
      .reveal-left  { opacity: 0; transform: translateX(-28px); transition: opacity .6s ease, transform .6s ease; }
      .reveal-left.in  { opacity: 1; transform: translateX(0); }
      .reveal-right { opacity: 0; transform: translateX(28px);  transition: opacity .6s ease, transform .6s ease; }
      .reveal-right.in { opacity: 1; transform: translateX(0); }

      /* Nav caret */
      .caret {
        display: inline-block; width: 0; height: 0;
        border-left: 4px solid transparent; border-right: 4px solid transparent;
        border-top: 5px solid currentColor;
        margin-left: 4px; vertical-align: middle; transition: transform .2s;
      }
      .nav-item:hover .caret { transform: rotate(180deg); }

      /* Hamburger lines */
      .ham-line {
        display: block; width: 22px; height: 2px;
        background: ${theme.textDark}; border-radius: 2px; transition: all .3s;
      }
      .ham-open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .ham-open .ham-line:nth-child(2) { opacity: 0; }
      .ham-open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

      /* Product card interactions */
      .prod-img img       { transition: transform .5s ease; }
      .prod-card:hover .prod-img img { transform: scale(1.06); }
      .prod-wishlist      { opacity: 0; transition: opacity .2s; }
      .prod-card:hover .prod-wishlist { opacity: 1; }

      /* Category card zoom */
      .cat-bg { transition: transform .5s ease; }
      .cat-card:hover .cat-bg { transform: scale(1.08); }

      /* Custom scrollbar */
      ::-webkit-scrollbar       { width: 6px; }
      ::-webkit-scrollbar-track { background: #f1f1f1; }
      ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }

      /* Animations */
      @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
      @keyframes slideInLeft  { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      @keyframes toastIn      { from { transform: translateX(-50%) translateY(80px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } }

      /* Device preview modes */
      .mode-laptop #scaler { max-width: 1100px; margin: 0 auto; }
      .mode-tablet #scaler { max-width: 768px;  margin: 0 auto; box-shadow: 0 0 40px rgba(0,0,0,.15); }
      .mode-phone #scaler {
        width: 390px;
        max-width: 100%;
        margin: 0 auto;
        box-shadow: 0 0 40px rgba(0,0,0,.15);
        overflow-x: hidden;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .hero-grid   { grid-template-columns: 1fr !important; text-align: center; }
        .about-grid  { grid-template-columns: 1fr !important; }
        .contact-grid{ grid-template-columns: 1fr !important; }
        .cats-grid   { grid-template-columns: repeat(2,1fr) !important; }
        .prods-grid  { grid-template-columns: repeat(2,1fr) !important; }
        .promo-grid  { grid-template-columns: 1fr !important; }
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
        .testi-grid  { grid-template-columns: repeat(2,1fr) !important; }
      }
      @media (max-width: 768px) {
        .desktop-nav  { display: none !important; }
        .nav-search   { display: none !important; }
        .prods-grid   { grid-template-columns: repeat(2,1fr) !important; }
        .testi-grid   { grid-template-columns: 1fr !important; }
        .footer-grid  { grid-template-columns: 1fr !important; }
        .about-imgs   { display: none !important; }
        .cart-drawer  { width: 100% !important; }
        .form-row     { grid-template-columns: 1fr !important; }
        .hero-circle  { width: 300px !important; height: 300px !important; }
      }
      @media (max-width: 480px) {
        .cats-grid  { grid-template-columns: 1fr !important; }
        .prods-grid { grid-template-columns: 1fr !important; }
        .email-form { flex-direction: column !important; padding: 14px !important; }
        .email-form button { width: 100% !important; }
        .hero-circle { width: 240px !important; height: 240px !important; }
      }
        .mode-phone .desktop-nav {
  display: none !important;
}

.mode-phone .nav-search {
  display: none !important;
}

.mode-phone .hero-grid,
.mode-phone .about-grid,
.mode-phone .contact-grid,
.mode-phone .promo-grid {
  grid-template-columns: 1fr !important;
}

.mode-phone .cats-grid,
.mode-phone .prods-grid,
.mode-phone .testi-grid,
.mode-phone .footer-grid {
  grid-template-columns: 1fr !important;
}

.mode-phone .cart-drawer {
  width: 100% !important;
}

.mode-phone .hero-circle {
  width: 260px !important;
  height: 260px !important;
  margin: 0 auto;
}

.mode-phone h1 {
  font-size: 48px !important;
  line-height: 1.1 !important;
}

.mode-phone #hero {
  min-height: auto !important;
}

.mode-phone .hero-grid {
  gap: 20px !important;
}
    `}</style>
  );
}
