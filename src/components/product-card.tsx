import { Product } from "../types";

type Props = {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Size: {product.size}</p>
      <p>Color: {product.color}</p>
      <p>Material: {product.material}</p>
      <p>Category: {product.category}</p>
      <p>Type: {product.type}</p>
    </div>
  );
};