import { useProductsContext } from "../context/products-context";
import { ProductCard } from "./product-card";

export const ProductGrid = () => {
  const { products } = useProductsContext();
  return (
    <div className="grid">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};