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
        filters[key]?.length > 0
          ? filters[key].includes(product[key])
          : true // Match all (empty array)
      );
      return matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      const sizeA = sizeOrder.indexOf(a.size);
      const sizeB = sizeOrder.indexOf(b.size);

      return sortOrder === "asc" ? sizeA - sizeB : sizeB - sizeA;
    });
};

