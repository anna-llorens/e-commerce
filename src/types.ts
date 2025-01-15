export type ProductFilters = {
  material: string[];
  category: string[];
  color: string[];
  type: string[];
};

export type Product = {
  id: number;
  name: string;
  size: string;
  color: string;
  material: string;
  type: string;
  category: string;
  options: {
    outOfStock: boolean;
    waterproof: boolean;
    original: boolean;
  }
}