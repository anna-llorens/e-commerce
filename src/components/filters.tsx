import React from "react";
import { useProductsContext } from "../context/products-context";

const MATERIAL_OPTIONS: string[] = [
  "Cotton", "Polyester", "Linen", "Lycra", "Silk", "Denim", "Nylon", "Leather", "Wool", "Spandex", "Chiffon", "Lace", "Fleece",
];
const CATEGORY_OPTIONS: string[] = [
  "Topwear", "Bottomwear", "One-piece", "Sportswear", "Swimwear", "Outerwear", "Formalwear",
];
const COLOR_OPTIONS: string[] = [
  "Blue", "Pink", "Beige", "Red", "Black", "Green", "White", "Gray", "Yellow", "Silver", "Brown", "Khaki", "Navy",
];
const TYPE_OPTIONS: string[] = [
  "Top", "Skirt", "Dress", "One-piece", "Shorts", "Shirt", "Swimwear", "T-Shirt", "Pants", "Sweater", "Vest", "Jacket", "Leggings", "Suit", "Coat",
];

export const Filters = () => {
  const { filters, onFilterChange, sortOrder, onSortChange } = useProductsContext()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <div className="filters">
      <div style={{ display: "flex", alignItems: "center" }}>
        <b>Filter Products:</b>
      </div>
      <select name="material" value={filters.material} onChange={handleChange}>
        <option value="">All Materials</option>
        {MATERIAL_OPTIONS.map((material) => (
          <option key={material} value={material}>
            {material}
          </option>
        ))}
      </select>
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        {CATEGORY_OPTIONS.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select name="color" value={filters.color} onChange={handleChange}>
        <option value="">All Colors</option>
        {COLOR_OPTIONS.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">All Types</option>
        {TYPE_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select value={sortOrder} onChange={(event) => onSortChange(event.target.value as "asc" | "desc")}>
        <option value="asc">Size: Ascending</option>
        <option value="desc">Size: Descending</option>
      </select>
    </div>
  );
};
