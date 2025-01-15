import React from "react";

import { Filters } from "./filters";
import { useProductsContext } from "../context/products-context";

export const Header: React.FC = () => {
  const {
    search,
    setSearch,
  } = useProductsContext();

  return (
    <header>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <Filters />
    </header>
  );
};
