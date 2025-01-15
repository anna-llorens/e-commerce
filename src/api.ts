import { Product } from "./types";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("/data/products.json");
  if (!response.ok) {
    throw new Error(`Failed to fetch products`);
  }
  return response.json();
};