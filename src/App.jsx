import { useState } from "react";

import GlobalStyle     from "./styles/GlobalStyle";
import { ToastProvider } from "./hooks/useToast";
import useCart         from "./hooks/useCart";

import DeviceSwitcher  from "./components/DeviceSwitcher";
import Navbar          from "./components/Navbar";
import CartDrawer      from "./components/CartDrawer";
import Hero            from "./components/Hero";
import SearchSection   from "./components/SearchSection";
import Categories      from "./components/Categories";
import ProductGrid     from "./components/ProductGrid";
import Promo           from "./components/Promo";
import About           from "./components/About";
import Testimonials    from "./components/Testimonials";
import Contact         from "./components/Contact";
import Newsletter      from "./components/Newsletter";
import Footer          from "./components/Footer";

import { NEW_ARRIVALS, BESTSELLERS } from "./data";
import theme from "./styles/theme";

function AppInner() {
  const [deviceMode, setDeviceMode] = useState("desktop");
  const [cartOpen,   setCartOpen]   = useState(false);
  const { items, addItem, removeItem, total, count } = useCart();

  return (
    <>
      <GlobalStyle />
      <DeviceSwitcher mode={deviceMode} setMode={setDeviceMode} />

      <div id="scaler">
        <Navbar cartCount={count} onCartOpen={() => setCartOpen(true)} />

        {cartOpen && (
          <CartDrawer
            items={items}
            total={total}
            onClose={() => setCartOpen(false)}
            onRemove={removeItem}
          />
        )}

        <Hero />
        <SearchSection />
        <Categories />

        <ProductGrid
          id="new-arrivals"
          label="Fresh Drops"
          title={`New <span style="color:${theme.orange}">Arrivals</span>`}
          desc="The latest vinyl records added this week"
          products={NEW_ARRIVALS}
          onAdd={addItem}
          bg="#f9f9f9"
        />

        <Promo />

        <ProductGrid
          id="bestsellers"
          label="All Time Faves"
          title={`Customer <span style="color:${theme.orange}">Favourites</span>`}
          desc="Our most purchased records of all time"
          products={BESTSELLERS}
          onAdd={addItem}
          bg="#fff"
        />

        <About />
        <Testimonials />
        <Contact />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppInner />
    </ToastProvider>
  );
}
