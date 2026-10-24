import { useState } from "react";
import { menuCategories, shishaMenu } from "../data/menuData.js";

export default function MenuCards({ compact = false }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const items =
    activeCategory === "all"
      ? shishaMenu
      : shishaMenu.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="menu-filters" role="group" aria-label="Filtriraj okuse">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            className={`filter-button${activeCategory === category.id ? " is-active" : ""}`}
            type="button"
            aria-pressed={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="menu-grid">
        {(compact ? items.slice(0, 6) : items).map((item) => (
          <article className="menu-card" key={item.name}>
            <div>
              <span className={`menu-tag ${item.category}`}>
                {item.category === "premium" ? "Premium" : "Classic"}
              </span>
              <h3>{item.name}</h3>
            </div>
            <span className="menu-price">{item.price}</span>
          </article>
        ))}
      </div>
    </>
  );
}
