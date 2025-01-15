import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { Product, ProductFilters } from "../types";
import { getFilteredProducts } from "../helpers";
import { fetchProducts } from "../api";


type ProductsContextType = {
  products: Product[];
  search: string;
  setSearch: (value: string) => void;
  filters: ProductFilters;
  onFilterChange: (updatedFilters: ProductFilters) => void;
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
  loading: boolean;
  error: string | null;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<ProductFilters>({
    material: [],
    category: [],
    color: [],
    type: [],
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setAllProducts(products);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return getFilteredProducts(allProducts, search, filters, sortOrder);
  }, [allProducts, search, filters, sortOrder]);

  const onFilterChange = (updatedFilters: ProductFilters) => {
    setFilters(updatedFilters);
  };

  const onSortChange = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        search,
        setSearch,
        filters,
        onFilterChange,
        sortOrder,
        onSortChange,
        loading,
        error,
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
