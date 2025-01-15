import { Product, ProductFilters } from "../types";
import { useProductsContext } from "../context/products-context";
import "./product-card.css"

type Props = {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { filters } = useProductsContext();

  const isFilterMatch = (filter: keyof ProductFilters): boolean => {
    return filters[filter]?.length > 0 ? filters[filter].includes(product[filter]) : false;
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Size: {product.size}</p>
      <p className={isFilterMatch("color") ? "matched-filter-product" : ""}>Color: {product.color}</p>
      <p className={isFilterMatch("material") ? "matched-filter-product" : ""}>Material: {product.material}</p>
      <p className={isFilterMatch("category") ? "matched-filter-product" : ""}>Category: {product.category}</p>
      <p className={isFilterMatch("type") ? "matched-filter-product" : ""}>Type: {product.type}</p>
    </div>
  );
};