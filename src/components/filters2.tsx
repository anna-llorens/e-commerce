
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
  const { filters, onFilterChange, sortOrder, onSortChange } = useProductsContext();

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    const newFilterValue = checked
      ? [...(filters[name] || []), value] // Add value to the array if checked
      : (filters[name] || []).filter((item: string) => item !== value); // Remove value if unchecked

    onFilterChange(name, newFilterValue);
  };

  return (
    <div className="filters">
      <div style={{ display: "flex", alignItems: "center" }}>
        <b>Filter Products:</b>
      </div>

      <div className="filter-group">
        <b>Material</b>
        {MATERIAL_OPTIONS.map((material) => (
          <label key={material} className="filter-item">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material?.includes(material)}
              onChange={(e) => handleCheckboxChange("material", material, e.target.checked)}
            />
            {material}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <b>Category</b>
        {CATEGORY_OPTIONS.map((category) => (
          <label key={category} className="filter-item">
            <input
              type="checkbox"
              name="category"
              value={category}
              checked={filters.category?.includes(category)}
              onChange={(e) => handleCheckboxChange("category", category, e.target.checked)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <b>Color</b>
        {COLOR_OPTIONS.map((color) => (
          <label key={color} className="filter-item">
            <input
              type="checkbox"
              name="color"
              value={color}
              checked={filters.color?.includes(color)}
              onChange={(e) => handleCheckboxChange("color", color, e.target.checked)}
            />
            {color}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <b>Type</b>
        {TYPE_OPTIONS.map((type) => (
          <label key={type} className="filter-item">
            <input
              type="checkbox"
              name="type"
              value={type}
              checked={filters.type?.includes(type)}
              onChange={(e) => handleCheckboxChange("type", type, e.target.checked)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <b>Sort Order</b>
        <label className="filter-item">
          <input
            type="radio"
            name="sortOrder"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={() => onSortChange("asc")}
          />
          Size: Ascending
        </label>
        <label className="filter-item">
          <input
            type="radio"
            name="sortOrder"
            value="desc"
            checked={sortOrder === "desc"}
            onChange={() => onSortChange("desc")}
          />
          Size: Descending
        </label>
      </div>
    </div>
  );
};
