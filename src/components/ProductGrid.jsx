import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";

export default function ProductGrid({ id, label, title, desc, products, onAdd, bg = "#fff" }) {
  return (
    <section id={id} style={{ padding: "80px 40px", background: bg }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader label={label} title={title} desc={desc} />
        <div
          className="prods-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}
        >
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
