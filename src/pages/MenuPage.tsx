import { useState } from "react";
import { menuItems } from "../data/menuData";
import "./MenuPage.css";

export default function MenuPage() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleIncrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>
          Explore our British-Indian fusion favorites, from curries and biryanis
          to wraps, street food, deals, and drinks.
        </p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <span className="menu-category">{item.category}</span>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>£{item.price.toFixed(2)}</h3>

            <div className="quantity-controls">
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <span>{quantities[item.id] || 1}</span>
              <button onClick={() => handleIncrease(item.id)}>+</button>
            </div>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}