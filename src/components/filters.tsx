import { useProductsContext } from "../context/products-context";
import { ProductFilters } from "../types";
import { CheckboxGroup } from "./checkobox-group";

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

  const hasActiveFilters =
    (filters.material && filters.material.length > 0) ||
    (filters.category && filters.category.length > 0) ||
    (filters.color && filters.color.length > 0) ||
    (filters.type && filters.type.length > 0);

  const handleCheckboxChange = (
    name: keyof ProductFilters,
    value: string,
    checked: boolean
  ) => {
    const updatedFilters: ProductFilters = {
      ...filters,
      [name]: checked
        ? [...(filters[name] || []), value] // Add value 
        : (filters[name] || []).filter((item) => item !== value), // Remove value
    };
    onFilterChange(updatedFilters);
  };

  const handleClearAll = () => {
    const clearedFilters: ProductFilters = {
      material: [],
      category: [],
      color: [],
      type: [],
    };
    onFilterChange(clearedFilters);
    onSortChange("asc");
  };

  return (
    <aside className="sidebar">
      <div className="filters">
        <div className="filters-header">
          <b>Product Filters</b>
          <button className="reset-button"
            onClick={handleClearAll}
            style={{ visibility: hasActiveFilters ? "visible" : "hidden" }}>
            Reset
          </button>
        </div>
        <div className="filter-columns">
          <CheckboxGroup
            name="color"
            options={COLOR_OPTIONS}
            selectedValues={filters.color || []}
            onChange={handleCheckboxChange}
          />
          <CheckboxGroup
            name="material"
            options={MATERIAL_OPTIONS}
            selectedValues={filters.material || []}
            onChange={handleCheckboxChange}
          />
          <CheckboxGroup
            name="type"
            options={TYPE_OPTIONS}
            selectedValues={filters.type || []}
            onChange={handleCheckboxChange}
          />
          <CheckboxGroup
            name="category"
            options={CATEGORY_OPTIONS}
            selectedValues={filters.category || []}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <b>Sort Order</b>
          <label className="checkbox-radio-item">
            <input
              type="radio"
              name="sortOrder"
              value="asc"
              checked={sortOrder === "asc"}
              onChange={() => onSortChange("asc")}
            />
            Size: Ascending
          </label>
          <label className="checkbox-radio-item">
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
    </aside>
  );
};
