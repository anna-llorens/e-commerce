
import { useProductsContext } from "../context/products-context";

export const Header = () => {
  const {
    search,
    setSearch,
    products
  } = useProductsContext();
  return (
    <header>
      <input
        type="text"
        placeholder="Search for a product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <span>Total: {products.length}</span>
    </header>
  );
};
