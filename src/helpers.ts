import { Product, ProductFilters } from "./types";

const sizeOrder = ["XS", "S", "M", "L", "XL"];

export const getFilteredProducts = (
  products: Product[],
  search: string,
  filters: ProductFilters,
  sortOrder: "asc" | "desc"
): Product[] => {
  return products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());

      const matchesFilters = (Object.keys(filters) as (keyof ProductFilters)[]).every((key) =>
        filters[key] ? product[key] === filters[key] : true
      );
      return matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      const sizeA = sizeOrder.indexOf(a.size);
      const sizeB = sizeOrder.indexOf(b.size);

      return sortOrder === "asc" ? sizeA - sizeB : sizeB - sizeA;
    });
};

export const getUniqueValuesByKey = (products: Product[], key: keyof Product): any[] => {
  const uniqueValues = new Set(products.map((product) => product[key]));
  return Array.from(uniqueValues);
};
