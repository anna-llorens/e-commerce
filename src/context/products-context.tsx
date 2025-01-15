import React, { createContext, useContext, useState, useMemo } from "react";
import { useProducts } from "../hooks/use-products";
import { Product, ProductFilters } from "../types";
import { getFilteredProducts } from "../helpers";

type ProductsContextType = {
  products: Product[];
  search: string;
  setSearch: (value: string) => void;
  filters: ProductFilters;
  onFilterChange: (name: string, value: string) => void;
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<ProductFilters>({
    material: "",
    category: "",
    color: "",
    type: "",
  });

  const filteredProducts = useMemo(() => {
    return getFilteredProducts(products, search, filters, sortOrder);
  }, [products, search, filters, sortOrder]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        search,
        setSearch,
        filters,
        onFilterChange: handleFilterChange,
        sortOrder,
        onSortChange: handleSortChange,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProductsContext must be used within a ProductsProvider");
  }
  return context;
};
