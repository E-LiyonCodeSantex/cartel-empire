export interface ProductCardProps {
  id: string; // Unique identifier for the product
  name: string; // Product name
  description?: string; // Optional short description
  price: number; // Price in local currency
  imageUrl: string; // Main product image
  rating?: number;
  isAvailable: boolean; // Whether the product is in stock
  salePrice?: number; // Optional discounted price
  tags?: string[]; // Optional array of tags (e.g., ["new", "popular"])
  brand?: string; // Optional brand name
  category?: string; // Optional category (e.g., "Perfume", "Ouds")
}