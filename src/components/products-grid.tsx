import { useProductsContext } from "../context/products-context";
import { ProductCard } from "./product-card";

export const ProductGrid = () => {
  const { products, error, loading } = useProductsContext();

  if (error || loading) {
    return <div className="grid-no-results">
      {error ? error : loading}
    </div>
  }


  return (
    <main className="grid-container">
      {products?.length > 0 ? (
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : <div className="grid-no-results">
        No results found
      </div>}
    </main>
  );
};
