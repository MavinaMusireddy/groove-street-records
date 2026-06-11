import { useState } from "react";

export default function useCart() {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems((prev) => [
      ...prev,
      { name: product.title, price: product.price, img: product.img },
    ]);
  }

  function removeItem(index) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return { items, addItem, removeItem, total, count: items.length };
}
